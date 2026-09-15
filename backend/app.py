import json
import os
import sqlite3
from contextlib import asynccontextmanager, contextmanager
from pathlib import Path
from typing import Literal
from datetime import datetime, timezone
from uuid import uuid4
from assessment import assess
from parity import install, configure_env
from durable_mutations import current_connection, install_receipts
from models import ProfileInput, ProfileUpdate, ReminderInput, MemoryInput

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, ConfigDict

ROOT = Path(__file__).resolve().parent
configure_env(ROOT)

class ReminderUpdate(BaseModel):
    model_config = ConfigDict(extra='forbid')
    version: int = Field(ge=1)
    completed: bool | None = None
    title: str | None = Field(default=None, min_length=1, max_length=200)
    time: str | None = Field(default=None, min_length=1, max_length=30)
    category: Literal['medication','meal','appointment','routine'] | None = None
    notes: str | None = Field(default=None,max_length=1000)
    assignedBy: str | None = Field(default=None,max_length=120)

class ActivityInput(BaseModel):
    model_config = ConfigDict(extra='forbid')
    occurred_at: str | None = Field(default=None,max_length=60)
    activity_id: str = Field(min_length=1, max_length=100)
    game_type: Literal['word', 'pattern', 'matching']
    correct: int = Field(ge=0)
    attempts: int = Field(ge=1, le=1000)
    response_time_ms: int = Field(ge=0, le=3600000)
    level: int = Field(ge=1, le=3)


def create_app(database_path: str | Path | None = None) -> FastAPI:
    db_path = Path(database_path or os.environ.get('MEMORY_MATE_DB', ROOT / 'data' / 'memory-mate.sqlite3'))

    @contextmanager
    def database():
        existing=current_connection.get()
        if existing is not None:
            yield existing
            return
        db_path.parent.mkdir(parents=True, exist_ok=True)
        connection = sqlite3.connect(db_path, timeout=10, check_same_thread=False)
        connection.row_factory = sqlite3.Row
        connection.execute('PRAGMA foreign_keys=ON')
        try:
            with connection:
                yield connection
        finally:
            connection.close()

    @asynccontextmanager
    async def lifespan(app):
        with database() as db:
            db.executescript('''
                CREATE TABLE IF NOT EXISTS patients (
                    id TEXT PRIMARY KEY, payload TEXT NOT NULL, version INTEGER NOT NULL DEFAULT 1
                );
                CREATE TABLE IF NOT EXISTS reminders (
                    patient_id TEXT NOT NULL REFERENCES patients(id),
                    id TEXT NOT NULL, payload TEXT NOT NULL,
                    version INTEGER NOT NULL DEFAULT 1,
                    PRIMARY KEY(patient_id, id)
                );
                CREATE TABLE IF NOT EXISTS sessions (
                    id TEXT PRIMARY KEY,
                    patient_id TEXT NOT NULL REFERENCES patients(id),
                    payload TEXT NOT NULL
                );
                CREATE TABLE IF NOT EXISTS mutation_receipts (id TEXT PRIMARY KEY, fingerprint TEXT NOT NULL, status INTEGER NOT NULL, body BLOB NOT NULL);
                PRAGMA user_version=1;
            ''')
            if 'version' not in [row[1] for row in db.execute('PRAGMA table_info(patients)')]:
                db.execute('ALTER TABLE patients ADD COLUMN version INTEGER NOT NULL DEFAULT 1')
            for patient in json.loads((ROOT / 'demo-patients.json').read_text(encoding='utf-8-sig')):
                patient_id = patient['profile']['id']
                created = db.execute('INSERT OR IGNORE INTO patients(id,payload) VALUES (?,?)', (patient_id, json.dumps(patient))).rowcount
                if created:
                    for reminder in patient['reminders']:
                        db.execute('INSERT INTO reminders(patient_id,id,payload) VALUES (?,?,?)', (patient_id, reminder['id'], json.dumps(reminder)))
        yield

    app = FastAPI(title='Memory Mate API', version='0.1.0', lifespan=lifespan)

    def patient_or_404(db, patient_id):
        row = db.execute('SELECT payload, version FROM patients WHERE id=?', (patient_id,)).fetchone()
        if row is None:
            raise HTTPException(404, 'Patient not found')
        return {**json.loads(row['payload']), 'version': row['version']}

    def reminder_json(row):
        return {**json.loads(row['payload']), 'version': row['version']}

    @app.get('/api/health')
    def health():
        with database() as db:
            db.execute('SELECT 1')
        return {'status': 'ok', 'storage': 'sqlite', 'mode': 'local-demo'}

    @app.get('/api/patients')
    def patients():
        with database() as db:
            return [{'profile': json.loads(row['payload'])['profile'], 'dataSource': json.loads(row['payload'])['dataSource']} for row in db.execute('SELECT payload FROM patients ORDER BY id')]

    @app.get('/api/patients/{patient_id}')
    def patient(patient_id: str):
        with database() as db:
            result = patient_or_404(db, patient_id)
            result['reminders'] = [reminder_json(row) for row in db.execute('SELECT * FROM reminders WHERE patient_id=? ORDER BY id', (patient_id,))]
            result['recordedSessions'] = [json.loads(row['payload']) for row in db.execute("SELECT payload FROM sessions WHERE patient_id=? ORDER BY json_extract(payload, '$.timestamp') DESC, rowid DESC", (patient_id,))]
            result['assessment'] = assess(result['profile'], result['recordedSessions'])
            return result

    @app.patch('/api/patients/{patient_id}/reminders/{reminder_id}')
    def update_reminder(patient_id: str, reminder_id: str, change: ReminderUpdate):
        updates = change.model_dump(exclude={'version'}, exclude_none=True)
        if not updates:
            raise HTTPException(422, 'Provide a title or completion status')
        if 'title' in updates:
            updates['title'] = updates['title'].strip()
            if not updates['title']:
                raise HTTPException(422, 'Title cannot be blank')
        with database() as db:
            row = db.execute('SELECT * FROM reminders WHERE patient_id=? AND id=?', (patient_id,reminder_id)).fetchone()
            if row is None:
                raise HTTPException(404, 'Reminder not found for this patient')
            payload = {**json.loads(row['payload']), **updates}
            changed = db.execute('UPDATE reminders SET payload=?, version=version+1 WHERE patient_id=? AND id=? AND version=?', (json.dumps(payload),patient_id,reminder_id,change.version)).rowcount
            if not changed:
                raise HTTPException(409, 'Reminder changed elsewhere. Refresh before saving.')
            return {**payload, 'version': change.version + 1}

    @app.post('/api/patients/{patient_id}/sessions', status_code=201)
    def record_activity(patient_id: str, activity: ActivityInput):
        if activity.correct > activity.attempts:
            raise HTTPException(422, 'Correct answers cannot exceed attempts')
        timestamp=datetime.now(timezone.utc)
        if activity.occurred_at:
            try:
                timestamp=datetime.fromisoformat(activity.occurred_at.replace('Z','+00:00'))
                if not timestamp.tzinfo or timestamp > datetime.now(timezone.utc): raise ValueError('Future timestamp')
            except ValueError: raise HTTPException(422,'Invalid activity timestamp')
        score = round(activity.correct * 100 / activity.attempts, 2)
        result = {**activity.model_dump(), 'id': f'{patient_id}:{activity.activity_id}', 'timestamp': timestamp.isoformat(), 'accuracy': score, 'errors': activity.attempts - activity.correct, 'score': score, 'dataSource': 'recorded', 'scoreSource': 'deterministic-v1'}
        with database() as db:
            patient_or_404(db, patient_id)
            db.execute('INSERT OR IGNORE INTO sessions VALUES (?,?,?)', (result['id'], patient_id, json.dumps(result)))
            saved = json.loads(db.execute('SELECT payload FROM sessions WHERE id=?', (result['id'],)).fetchone()['payload'])
            if any(saved[key] != value for key, value in activity.model_dump().items()):
                raise HTTPException(409, 'Activity ID already used for a different result')
            result = saved
        return result


    @app.post('/api/patients', status_code=201)
    def create_patient(body: ProfileInput):
        patient_id = 'user-' + str(uuid4())
        payload = {'dataSource': 'user', 'profile': {'id': patient_id, **body.model_dump()}, 'memories': [], 'knownFaces': [], 'trendData': [], 'gameSessions': [], 'reminders': []}
        with database() as db:
            db.execute('INSERT INTO patients(id,payload) VALUES (?,?)', (patient_id,json.dumps(payload)))
        return {'id': patient_id}

    @app.patch('/api/patients/{patient_id}')
    def edit_patient(patient_id: str, body: ProfileUpdate):
        with database() as db:
            payload = patient_or_404(db, patient_id)
            payload.pop('version')
            payload['profile'].update(body.model_dump(exclude={'version'}))
            changed = db.execute('UPDATE patients SET payload=?,version=version+1 WHERE id=? AND version=?', (json.dumps(payload),patient_id,body.version)).rowcount
            if not changed:
                raise HTTPException(409, 'Profile changed elsewhere. Refresh and retry.')
        return {'id':patient_id,'version':body.version+1}

    @app.get('/api/patients/{patient_id}/assessment')
    def assessment(patient_id: str):
        return patient(patient_id)['assessment']

    @app.post('/api/patients/{patient_id}/reminders', status_code=201)
    def add_reminder(patient_id: str, body: ReminderInput):
        reminder = {'id':str(uuid4()), **body.model_dump()}
        with database() as db:
            patient_or_404(db,patient_id)
            db.execute('INSERT INTO reminders(patient_id,id,payload) VALUES (?,?,?)', (patient_id,reminder['id'],json.dumps(reminder)))
        return {**reminder,'version':1}

    @app.delete('/api/patients/{patient_id}/reminders/{reminder_id}')
    def delete_reminder(patient_id: str, reminder_id: str, version: int):
        with database() as db:
            changed = db.execute('DELETE FROM reminders WHERE patient_id=? AND id=? AND version=?', (patient_id,reminder_id,version)).rowcount
            if not changed:
                raise HTTPException(409,'Reminder no longer matches. Refresh and retry.')
        return {'deleted':True}

    def change_memory(patient_id, version, update):
        with database() as db:
            payload = patient_or_404(db,patient_id)
            payload.pop('version')
            update(payload['memories'])
            changed = db.execute('UPDATE patients SET payload=?,version=version+1 WHERE id=? AND version=?', (json.dumps(payload),patient_id,version)).rowcount
            if not changed:
                raise HTTPException(409,'Memories changed elsewhere. Refresh and retry.')
        return {'version':version+1}

    @app.post('/api/patients/{patient_id}/memories', status_code=201)
    def add_memory(patient_id: str, body: MemoryInput):
        item = {'id':str(uuid4()),'createdAt':datetime.now(timezone.utc).isoformat(),**body.model_dump(exclude={'version'})}
        return {'id':item['id'],**change_memory(patient_id,body.version,lambda items:items.append(item))}

    @app.patch('/api/patients/{patient_id}/memories/{memory_id}')
    def edit_memory(patient_id: str, memory_id: str, body: MemoryInput):
        def update(items):
            item = next((item for item in items if item['id']==memory_id),None)
            if item is None: raise HTTPException(404,'Memory not found')
            item.update(body.model_dump(exclude={'version'}))
        return change_memory(patient_id,body.version,update)

    @app.delete('/api/patients/{patient_id}/memories/{memory_id}')
    def delete_memory(patient_id: str, memory_id: str, version: int):
        def update(items):
            item = next((item for item in items if item['id']==memory_id),None)
            if item is None: raise HTTPException(404,'Memory not found')
            items.remove(item)
        return change_memory(patient_id,version,update)

    install_receipts(app, database)
    install(app, database, patient_or_404, patient, db_path, ActivityInput)
    app.add_middleware(CORSMiddleware, allow_origins=os.environ.get('ALLOWED_ORIGINS', 'http://localhost:3002,http://127.0.0.1:3002').split(','), allow_methods=['GET','POST','PATCH','DELETE'], allow_headers=['Content-Type','X-Operation-ID'])
    return app

app = create_app()
