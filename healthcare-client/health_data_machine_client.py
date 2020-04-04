from timeloop import Timeloop
from datetime import timedelta
from datetime import datetime
import json
import websocket
from websocket import create_connection
import sys

tl = Timeloop()
spo2 = [96, 92, 95, 91, 93, 93, 92, 93, 97, 94, 91, 93, 98, 91, 96, ]
bloodPress = [92, 95, 93, 94, 92, 103, 104, 95, 93, 102, 105, 113, 112, 111, 107]
bodyTemp = [36.5, 37.5, 36.6, 35.4, 36.7, 37, 37.2, 37.3, 37.4, 36.2, 36.1, 35.8, 36.9, 35.8, 39.3];
pulseRate = [65, 72, 75, 71, 73, 63, 62, 73, 75, 68, 64, 76, 70, 78, 71];
respRate = [16, 12, 15, 21, 13, 13, 12, 13, 20, 18, 17, 19, 14, 15, 16, 12];

index = 0

websocket.enableTrace(True)
ws = create_connection('ws://127.0.0.1:5678')


@tl.job(interval=timedelta(seconds=2))
def publish_health_data():
    global index
    if index < len(spo2):
        data = patient_data(index)
        print(data)
        ws.send(json.dumps(data))
        index = index + 1
    else:
        print("Stopped AirData!!")
        sys.exit()


def patient_data(item):
    timeStamp = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3] + 'Z'
    print(timeStamp)
    health_data = {
        'spo2': spo2[item],
        'bloodPress': bloodPress[item],
        'bodyTemp': bodyTemp[item],
        'pulseRate': pulseRate[item],
        'respRate': respRate[item],
        'timestamp': timeStamp
    }

    return health_data


if __name__ == "__main__":
    tl.start(block=True)
