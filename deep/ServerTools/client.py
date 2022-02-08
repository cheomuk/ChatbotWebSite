import asyncio
import websockets


async def connect():
    # 웹 소켓에 접속을 합니다.
    async with websockets.connect("ws://localhost:3000") as websocket:

        await websocket.send("자장면 예약해줘")
        data_rcv = await websocket.recv()
        print(data_rcv)

asyncio.get_event_loop().run_until_complete(connect())
