import json
import tempfile
import unittest
from pathlib import Path
from fastapi.testclient import TestClient
from app import create_app

class PersistenceTests(unittest.TestCase):
    def test_reminder_survives_restart_and_profiles_are_isolated(self):
        with tempfile.TemporaryDirectory() as folder:
            database = Path(folder) / 'test.sqlite3'
            with TestClient(create_app(database)) as client:
                patients = client.get('/api/patients').json()
                self.assertEqual(len(patients), 3)
                first, second = [p['profile']['id'] for p in patients[:2]]
                reminder = client.get(f'/api/patients/{first}').json()['reminders'][0]
                url = f'/api/patients/{first}/reminders/{reminder["id"]}'
                response = client.patch(url, json={'version':1, 'title':'Persisted reminder', 'completed':not reminder['completed']})
                self.assertEqual(response.status_code, 200)
                self.assertEqual(client.patch(url, json={'version':1,'completed':True}).status_code,409)
                self.assertEqual(client.patch(f'/api/patients/{second}/reminders/{reminder["id"]}', json={'version':1,'completed':True}).status_code,404)
            with TestClient(create_app(database)) as client:
                saved = client.get(f'/api/patients/{first}').json()['reminders'][0]
                self.assertEqual(saved['title'], 'Persisted reminder')
                self.assertEqual(saved['version'], 2)
                self.assertEqual(len(client.get('/api/patients').json()),3)

    def test_zero_score_and_invalid_input(self):
        with tempfile.TemporaryDirectory() as folder:
            with TestClient(create_app(Path(folder)/'test.sqlite3')) as client:
                url='/api/patients/launch-demo-1/sessions'
                activity={'activity_id':'test-session','game_type':'word','correct':0,'attempts':3,'response_time_ms':1200,'level':1}
                response=client.post(url,json=activity)
                self.assertEqual(response.status_code,201)
                self.assertEqual(response.json()['score'],0)
                self.assertEqual(response.json()['errors'],3)
                self.assertEqual(client.post(url,json=activity).json()['id'],response.json()['id'])
                self.assertEqual(client.post(url,json={**activity,'correct':1}).status_code,409)
                self.assertEqual(len(client.get('/api/patients/launch-demo-1').json()['recordedSessions']),1)
                self.assertEqual(client.post(url,json={**activity,'correct':4}).status_code,422)
                self.assertEqual(client.post(url,json={**activity,'attempts':0}).status_code,422)
                self.assertEqual(client.post('/api/patients/missing/sessions',json=activity).status_code,404)

if __name__ == '__main__': unittest.main()
