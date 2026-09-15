import copy
import os
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch
from fastapi.testclient import TestClient
from app import create_app

class ParityTests(unittest.TestCase):
 def setUp(self):
  self.temp=tempfile.TemporaryDirectory();self.path=Path(self.temp.name)/'test.sqlite3';self.client=TestClient(create_app(self.path));self.client.__enter__();self.pid='launch-demo-1'
 def tearDown(self):self.client.__exit__(None,None,None);self.temp.cleanup()
 def test_labels_and_extended_profile(self):
  data=self.client.get(f'/api/patients/{self.pid}').json();p=data['profile']
  body={k:p.get(k,'') for k in ['name','age','gender','location','primaryCaregiver','notes','diagnosis','ashaWorker','hospital']};body.update(version=data['version'],ashaWorker='Test ASHA',hospital='Test center')
  self.assertEqual(self.client.patch(f'/api/patients/{self.pid}',json=body).status_code,200)
  data=self.client.get(f'/api/patients/{self.pid}').json();self.assertEqual(data['profile']['ashaWorker'],'Test ASHA')
  face={'name':'Test sister','relationship':'Sister','location':'Assam','notes':'Supplied label','photoUrl':'','version':data['version']}
  self.assertEqual(self.client.post(f'/api/patients/{self.pid}/faces',json=face).status_code,201)
  self.assertEqual(self.client.post(f'/api/patients/{self.pid}/faces',json=face).status_code,409)
  data=self.client.get(f'/api/patients/{self.pid}').json();item=data['knownFaces'][-1];face.update(version=data['version'],notes='Edited label')
  self.assertEqual(self.client.patch(f"/api/patients/{self.pid}/faces/{item['id']}",json=face).status_code,200)
  data=self.client.get(f'/api/patients/{self.pid}').json()
  self.assertEqual(self.client.delete(f"/api/patients/{self.pid}/faces/{item['id']}?version={data['version']}").status_code,200)
 def test_backup_merge_is_validated_and_preserves_other_records(self):
  original=self.client.get('/api/backup').json()
  bad=copy.deepcopy(original);bad['patients'][0]['profile']['age']=-1
  self.assertEqual(self.client.post('/api/restore',json={'backup':bad,'expectedDigest':original['digest']}).status_code,422)
  self.assertEqual(self.client.get('/api/backup').json()['digest'],original['digest'])
  edited=copy.deepcopy(original);edited['patients']=edited['patients'][:1];edited['patients'][0]['profile']['notes']='Restored test'
  response=self.client.post('/api/restore',json={'backup':edited,'expectedDigest':original['digest']});self.assertEqual(response.status_code,200,response.text)
  self.assertEqual(len(self.client.get('/api/patients').json()),103)
  self.assertTrue((self.path.parent/response.json()['recoveryFile']).is_file())
  self.assertEqual(self.client.post('/api/restore',json={'backup':original,'expectedDigest':original['digest']}).status_code,409)
 def test_ai_absent_does_not_fabricate_reply(self):
  with patch.dict(os.environ,{'GEMINI_API_KEY':''}):
   self.assertFalse(self.client.get('/api/status').json()['configured'])
   response=self.client.post(f'/api/patients/{self.pid}/assistant',json={'message':'Who is with me?'})
   self.assertEqual(response.status_code,503);self.assertNotIn('reply',response.json())
 def test_offline_timestamp_and_duplicate_session(self):
  body={'activity_id':'offline','game_type':'pattern','correct':2,'attempts':3,'response_time_ms':1500,'level':1,'occurred_at':'2026-01-01T12:00:00+00:00'}
  first=self.client.post(f'/api/patients/{self.pid}/sessions',json=body);self.assertEqual(first.status_code,201)
  self.assertEqual(first.json(),self.client.post(f'/api/patients/{self.pid}/sessions',json=body).json())
  self.assertEqual(first.json()['timestamp'],body['occurred_at'])
  body['activity_id']='invalid';body['occurred_at']='not-a-date';self.assertEqual(self.client.post(f'/api/patients/{self.pid}/sessions',json=body).status_code,422)

 def test_mutation_receipt_survives_retries_and_rejects_reused_id(self):
  headers={'X-Operation-ID':'new-patient-operation','Origin':'http://localhost:3002'}
  body={'name':'Receipt test','age':70}
  first=self.client.post('/api/patients',json=body,headers=headers)
  self.assertEqual(first.status_code,201,first.text)
  self.assertEqual(self.client.post('/api/patients',json=body,headers=headers).headers.get('access-control-allow-origin'),'http://localhost:3002')
  self.assertEqual(self.client.post('/api/patients',json=body,headers=headers).json(),first.json())
  self.assertEqual(len(self.client.get('/api/patients').json()),104)
  self.assertEqual(self.client.post('/api/patients',json={'name':'Different','age':70},headers=headers).status_code,409)
  pid=first.json()['id'];r=self.client.post(f'/api/patients/{pid}/reminders',json={'title':'Test','time':'09:00'},headers={'X-Operation-ID':'reminder-create'})
  self.assertEqual(r.status_code,201)
  self.assertEqual(self.client.post(f'/api/patients/{pid}/reminders',json={'title':'Test','time':'09:00'},headers={'X-Operation-ID':'reminder-create'}).json(),r.json())
  self.assertEqual(len(self.client.get(f'/api/patients/{pid}').json()['reminders']),1)
