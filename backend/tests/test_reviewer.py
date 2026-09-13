import unittest
import tempfile
from pathlib import Path
from datetime import datetime, timezone
from fastapi.testclient import TestClient
from app import create_app
from assessment import assess

class ReviewerTests(unittest.TestCase):
    def test_profile_memory_and_reminder_crud(self):
        with tempfile.TemporaryDirectory() as folder, TestClient(create_app(Path(folder)/'records.sqlite3')) as client:
            body={'name':'Test person','age':70,'preferences':{'language':'hi','largeText':True,'weeklyGoalDays':3,'responseGoalMs':8000}}
            made=client.post('/api/patients',json=body)
            self.assertEqual(made.status_code,201)
            pid=made.json()['id']; url=f'/api/patients/{pid}'
            self.assertEqual(client.get(url).json()['profile']['preferences']['language'],'hi')
            self.assertEqual(client.patch(url,json={**body,'name':'Updated','version':1}).status_code,200)
            self.assertEqual(client.patch(url,json={**body,'version':1}).status_code,409)
            reminder=client.post(url+'/reminders',json={'title':'Tea','time':'09:00 AM'}).json()
            self.assertEqual(client.delete(url+'/reminders/'+reminder['id']+'?version=1').status_code,200)
            memory={'title':'Garden','caption':'A supplied memory','imageUrl':'','version':2}
            self.assertEqual(client.post(url+'/memories',json=memory).status_code,201)
            record=client.get(url).json()
            mid=record['memories'][0]['id']
            self.assertEqual(client.patch(url+'/memories/'+mid,json={**memory,'caption':'Edited','version':3}).status_code,200)
            self.assertEqual(client.delete(url+'/memories/'+mid+'?version=4').status_code,200)
            self.assertEqual(client.get(url).json()['memories'],[])
            self.assertEqual(client.post(url+'/memories',json={**memory,'imageUrl':'javascript:bad','version':5}).status_code,422)

    def test_model_reproducible_profile_sensitive_and_demo_excluded(self):
        now=datetime(2026,9,13,12,tzinfo=timezone.utc)
        samples=[{'dataSource':'recorded','game_type':'word','timestamp':now.isoformat(),'accuracy':60,'response_time_ms':8000,'level':1} for _ in range(3)]
        profile={'preferences':{'responseGoalMs':4000,'weeklyGoalDays':4}}
        result=assess(profile,samples,now)
        self.assertEqual(result,assess(profile,samples,now))
        self.assertEqual(result['supportLevel'],'High')
        slower=assess({'preferences':{'responseGoalMs':12000,'weeklyGoalDays':1}},samples,now)
        self.assertLess(slower['supportIndex'],result['supportIndex'])
        self.assertIsNone(assess(profile,[{**s,'dataSource':'demo'} for s in samples],now)['supportLevel'])
        good=[{**s,'accuracy':100} for s in samples]
        self.assertEqual(assess(profile,good,now)['nextLevels']['word'],2)
