import asyncio
import websockets
import pymysql
from ChatbotTest import ChatbotTest
from config.DatabaseConfig import *


async def accept(websocket, path):
    while True:
        data = await websocket.recv()
        process = ChatbotTest(data)

        print("receive : " + data)
        await websocket.send(process.answer)

# db = None
# try:
#     db = pymysql.connect(
#         host=DB_HOST,
#         user=DB_USER,
#         passwd=DB_PASSWORD,
#         db=DB_NAME,
#         port=DB_PORT,
#         charset='utf8'
#     )
#
# except Exception as e:
#     print(e)

start_server = websockets.serve(accept, LOCAL_HOST, LOCAL_PORT)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
# if db is not None:
#     db.close()
