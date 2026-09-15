"""Commit a mutation and its retry receipt in the same SQLite transaction."""
import asyncio
import hashlib
import json
from contextvars import ContextVar
from fastapi import Request
from starlette.responses import Response, JSONResponse

current_connection = ContextVar('memory_mate_transaction', default=None)

def install_receipts(app, database):
    gate = asyncio.Lock()
    @app.middleware('http')
    async def idempotency(request: Request, call_next):
        operation = request.headers.get('x-operation-id')
        path = request.url.path
        if (not operation or request.method not in ('POST','PATCH','DELETE') or
            not path.startswith('/api/patients') or path.endswith(('/assistant','summary','reminiscence'))):
            return await call_next(request)
        if len(operation)>100:
            return JSONResponse({'detail':'Invalid operation ID'},status_code=422)
        body = await request.body()
        fingerprint = hashlib.sha256(request.method.encode()+str(request.url).encode()+body).hexdigest()
        async with gate:
            with database() as db:
                db.execute('BEGIN IMMEDIATE')
                row=db.execute('SELECT fingerprint,status,body FROM mutation_receipts WHERE id=?',(operation,)).fetchone()
                if row:
                    if row['fingerprint'] != fingerprint:
                        return JSONResponse({'detail':'Operation ID was already used for different data'},status_code=409)
                    return Response(row['body'],status_code=row['status'],media_type='application/json')
                token=current_connection.set(db)
                try:
                    response=await call_next(request)
                    payload=b''.join([part async for part in response.body_iterator])
                    if 200<=response.status_code<300:
                        db.execute('INSERT INTO mutation_receipts VALUES (?,?,?,?)',(operation,fingerprint,response.status_code,payload))
                    else:
                        db.rollback()
                    return Response(payload,status_code=response.status_code,headers=dict(response.headers),media_type=response.media_type)
                finally:
                    current_connection.reset(token)
