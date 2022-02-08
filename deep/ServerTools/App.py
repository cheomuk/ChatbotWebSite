import asyncio
import websockets
from ChatbotTest import ChatbotTest


async def accept(websocket, path):
    while True:
        data = await websocket.recv()
        process = ChatbotTest(data)

        print("receive : " + data)
        await websocket.send(process.answer)

start_server = websockets.serve(accept, "localhost", 3000)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
