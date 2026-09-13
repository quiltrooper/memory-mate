import json
import os
import sqlite3
from contextlib import asynccontextmanager, contextmanager
from pathlib import Path
from typing import Literal
from datetime import datetime, timezone

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, ConfigDict

ROOT = Path(__file__).resolve().parent

class ReminderUpdate(BaseModel):
    model_config = ConfigDict(extra='forbid')
    version: int = Field(ge=1)
    completed: bool | None = None
    title: str | None = Field(default=None, min_length=1, max_length=200)

class ActivityInput(BaseModel):
    model_config = ConfigDict(extra='forbid')
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
        db_path.parent.mkdir(parents=True, exist_ok=True)
        connection = sqlite3.connect(db_path, timeout=10)
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
                    id TEXT PRIMARY KEY, payload TEXT NOT NULL
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
                PRAGMA user_version=1;
            ''')
            for patient in json.loads((ROOT / 'demo-patients.json').read_text(encoding='utf-8-sig')):
                patient_id = patient['profile']['id']
                created = db.execute('INSERT OR IGNORE INTO patients VALUES (?,?)', (patient_id, json.dumps(patient))).rowcount
                if created:
                    for reminder in patient['reminders']:
                        db.execute('INSERT INTO reminders(patient_id,id,payload) VALUES (?,?,?)', (patient_id, reminder['id'], json.dumps(reminder)))
        yield

    app = FastAPI(title='Memory Mate API', version='0.1.0', lifespan=lifespan)
    app.add_middleware(CORSMiddleware, allow_origins=os.environ.get('ALLOWED_ORIGINS', 'http://localhost:3002,http://127.0.0.1:3002').split(','), allow_methods=['GET','POST','PATCH'], allow_headers=['Content-Type'])

    def patient_or_404(db, patient_id):
        row = db.execute('SELECT payload FROM patients WHERE id=?', (patient_id,)).fetchone()
        if row is None:
            raise HTTPException(404, 'Patient not found')
        return json.loads(row['payload'])

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
            result['recordedSessions'] = [json.loads(row['payload']) for row in db.execute('SELECT payload FROM sessions WHERE patient_id=? ORDER BY rowid DESC', (patient_id,))]
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
        score = round(activity.correct * 100 / activity.attempts, 2)
        result = {**activity.model_dump(), 'id': f'{patient_id}:{activity.activity_id}', 'timestamp': datetime.now(timezone.utc).isoformat(), 'accuracy': score, 'errors': activity.attempts - activity.correct, 'score': score, 'dataSource': 'recorded', 'scoreSource': 'deterministic-v1'}
        with database() as db:
            patient_or_404(db, patient_id)
            db.execute('INSERT OR IGNORE INTO sessions VALUES (?,?,?)', (result['id'], patient_id, json.dumps(result)))
            saved = json.loads(db.execute('SELECT payload FROM sessions WHERE id=?', (result['id'],)).fetchone()['payload'])
            if any(saved[key] != value for key, value in activity.model_dump().items()):
                raise HTTPException(409, 'Activity ID already used for a different result')
            result = saved
        return result

    return app

app = create_app()
