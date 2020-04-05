#!/usr/bin/env python

# WS server that sends messages at random intervals

import asyncio
import random
import websockets
from json import dumps
from kafka import KafkaProducer

producer = KafkaProducer(bootstrap_servers=['localhost:9092'],
                         value_serializer=lambda x:
                         dumps(x).encode('ascii'))


async def time(websocket, path):
    while True:
        json_data = await websocket.recv()
        print(json_data)
        producer.send('livedata', value=json_data)
        await asyncio.sleep(random.random() * 2)


start_server = websockets.serve(time, "127.0.0.1", 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
