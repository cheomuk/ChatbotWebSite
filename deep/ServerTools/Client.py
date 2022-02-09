import asyncio
import websockets
from deep.config.DatabaseConfig import *


class Client:
    def __init__(self, instr: str = ''):
        self.data_rcv = None
        self.instr = instr

    async def connect(self):
        # 웹 소켓에 접속을 합니다.
        async with websockets.connect("ws://" + LOCAL_HOST.__str__() + ":5000") as websocket:

            await websocket.send(self.instr)
            data_rcv = await websocket.recv()
            print(data_rcv)
            return data_rcv

    def start(self):
        asyncio.get_event_loop().run_until_complete(self.connect())


Client('배고파').start()
