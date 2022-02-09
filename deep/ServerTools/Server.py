import socketio
from deep.ChatbotTest import ChatbotTest
from deep.config.DatabaseConfig import *

sio = socketio.Client()


@sio.event
def connect():
    print('connection established')


@sio.event
def send(id, _type = "empty", sender = "", data = '', time = ''):
    msg_type = _type
    if sender == 'bot':
        return
    if msg_type == "image":
        print("이미지 파일")
        sio.emit("send", (type, 'bot', "아직  사용할 수 없는 기능입니다."))

    elif msg_type == "text":
        print('message received with ', data)


    try:
        answer = ChatbotTest(data).answer

        sio.emit('send', ('test', 'bot', answer))
        print('massage send:', answer)

    except Exception as e:
        sio.event('send', ('bot', e))
        print('Raised Exception:', e)

    finally:
        print('========================================\n'
              '========================================')


@sio.event
def disconnect():
    print('disconnected from server')


sio.connect('http://ciart.synology.me:4000')
sio.wait()

# import asyncio
# import websockets
# import pymysql
# from ChatbotTest import ChatbotTest
# from config.DatabaseConfig import *
#
#
# async def accept(websocket, path):
#     while True:
#         data = await websocket.recv()
#         process = ChatbotTest(data)
#
#         print("receive : " + data)
#         await websocket.send(process.answer)
#
# # db = None
# # try:
# #     db = pymysql.connect(
# #         host=DB_HOST,
# #         user=DB_USER,
# #         passwd=DB_PASSWORD,
# #         db=DB_NAME,
# #         port=DB_PORT,
# #         charset='utf8'
# #     )
# #
# # except Exception as e:
# #     print(e)
#
# start_server = websockets.serve(accept, LOCAL_HOST, LOCAL_PORT)
# asyncio.get_event_loop().run_until_complete(start_server)
# asyncio.get_event_loop().run_forever()
# # if db is not None:
# #     db.close()
