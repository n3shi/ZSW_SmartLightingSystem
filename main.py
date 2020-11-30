import JSON_
import json
import datetime
import time

import json
import pprint
import websocket
from websocket import create_connection


##################################################
#           P26 ----> Relay_Ch1
#            P20 ----> Relay_Ch2
#            P21 ----> Relay_Ch3
##################################################
#!/usr/bin/python
# -*- coding:utf-8 -*-
import RPi.GPIO as GPIO
RelayChannel = [26, 20, 21] # relay channels mapping
ChannelState = [1, 1, 1] # relay channels stete
GPIO.setwarnings(False) # warn logs off
GPIO.setmode(GPIO.BCM)  # BCM pin mapping mode
for i in range(3):
    GPIO.setup(RelayChannel[i], GPIO.OUT) # set RelayChannel[i] as output pin










def convertToMinutes(x: str) -> int:
    return 60*int(x[0:2]) + int(x[3:5])



websocket.enableTrace(True)
ws = create_connection('ws://localhost:8050')
ws.send("123456789")
json_string = ws.recv()
print('Result: {}'.format(json_string))

result = JSON_.welcome_from_dict(json.loads(json_string))

websocket.enableTrace(False)

print('---------')

if len(result[0].begin)==0:
    begin1 = 0
else:
    begin1 = convertToMinutes(result[0].begin)
    
if len(result[0].end)==0:
    end1 = 0
else:
    end1 = convertToMinutes(result[0].end)
    
    
    
if len(result[1].begin)==0:
    begin2 = 0
else:
    begin2 = convertToMinutes(result[1].begin)
    
if len(result[1].end)==0:
    end2 = 0
else:
    end2 = convertToMinutes(result[1].end)
   
   
   
if len(result[2].begin)==0:
    begin3 = 0
else:
    begin3 = convertToMinutes(result[2].begin)
    
if len(result[2].end)==0:
    end3 = 0
else:
    end3 = convertToMinutes(result[2].end)

print('---------')

print("begin1 : " + str(begin1))
print("end1 : " + str(end1))
print("begin2 : " + str(begin2))
print("end2 : " + str(end2))
print("begin2 : " + str(begin3))
print("end3 : " + str(end3))

print('---------')






current = 0
cycleNo = 0
relay1 = False
relay2 = False
relay3 = False

while True:


    current_ = datetime.datetime.now()
    current = current_.hour*60 + current_.minute


    if (current>=begin1):
        relay1 = True
        GPIO.output(RelayChannel[0],GPIO.HIGH)
    if (current > end1):
        relay1 = False
        GPIO.output(RelayChannel[0],GPIO.LOW)

    if (current>=begin2):
        relay2 = True
        GPIO.output(RelayChannel[1],GPIO.HIGH)
    if (current > end2):
        relay2 = False
        GPIO.output(RelayChannel[1],GPIO.LOW)

    if (current>=begin3):
        relay3 = True
        GPIO.output(RelayChannel[2],GPIO.HIGH)
    if (current > end3):
        relay3 = False
        GPIO.output(RelayChannel[2],GPIO.LOW)

    print('T: %5d | Relay1: % d | Relay2: % d | Relay3: % d'% (current, relay1, relay2, relay3))

    if current >= 1439:
        current = 0
    else:
        current += 1
###
    cycleNo += 1
    if cycleNo % 10 == 0:
        cycleNo = 0
        ws = create_connection('ws://localhost:8050')
        ws.send("123456789")
        json_string = ws.recv()
        result = JSON_.welcome_from_dict(json.loads(json_string))
        if len(result[0].begin)==0:
            begin1 = 0
        else:
            begin1 = convertToMinutes(result[0].begin)
        if len(result[0].end)==0:
            end1 = 0
        else:
            end1 = convertToMinutes(result[0].end)
        if len(result[1].begin)==0:
            begin2 = 0
        else:
            begin2 = convertToMinutes(result[1].begin)
        if len(result[1].end)==0:
            end2 = 0
        else:
            end2 = convertToMinutes(result[1].end)
        if len(result[2].begin)==0:
            begin3 = 0
        else:
            begin3 = convertToMinutes(result[2].begin)
        if len(result[2].end)==0:
            end3 = 0
        else:
            end3 = convertToMinutes(result[2].end)
        print("Ask for data")

###
    time.sleep(1)



