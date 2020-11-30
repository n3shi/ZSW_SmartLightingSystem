import JSON_
import json
import datetime
import time

def convertToMinutes(x: str) -> int:
    return 60*int(x[0:2]) + int(x[3:5])

json_string = open('json_data.json', "r").read()
result = JSON_.welcome_from_dict(json.loads(json_string))




for x in range(len(result)):
    print (x)

for x in result:
    print(x.name)

#print(result[0].light_sources[0].relay)



#print(convertToMinutes(result[0].light_sources[0].begin))
#print(convertToMinutes(result[0].light_sources[0].end))

print('---------')

begin1 = convertToMinutes(result[0].light_sources[0].begin)
end1 = convertToMinutes(result[0].light_sources[0].end)
begin2 = convertToMinutes(result[0].light_sources[1].begin)
end2 = convertToMinutes(result[0].light_sources[1].end)
begin3 = convertToMinutes(result[0].light_sources[2].begin)
end3 = convertToMinutes(result[0].light_sources[2].end)

print("begin1 : " + str(begin1))
print("end1 : " + str(end1))
print("begin2 : " + str(begin2))
print("end2 : " + str(end2))
print("begin2 : " + str(begin3))
print("end3 : " + str(end3))


current = 0
relay1 = False
relay2 = False
relay3 = False

while True:


    current_ = datetime.datetime.now()
    current = current_.hour*60 + current_.minute


    if (current>=begin1):
        relay1 = True
    if (current > end1):
        relay1 = False
        
    if (current>=begin2):
        relay2 = True
    if (current > end2):
        relay2 = False
        
    if (current>=begin3):
        relay3 = True
    if (current > end3):
        relay3 = False

    print('T: %5d | Relay1: % d | Relay2: % d | Relay3: % d'% (current, relay1, relay2, relay3))

#    if current >= 1439:
#        current = 0
##        break
#    else:
#        current += 1

    time.sleep(10)













#
