import JSON_
import json

json_string = open('json_data.json', "r").read()
result = JSON_.welcome_from_dict(json.loads(json_string))




for x in range(len(result)):
    print (x)

for x in result:
    print(x.name)

print(result[0].light_sources[0].relay)


