import json

data = {}
data['frame'] = []
data['frame'].append(
{
	'relay': 1,
	'begin': '00:00',
	'end': '12:00',
	'func': 'off',
	'funcArg': ''
})
data['frame'].append(
{
	'relay': 2,
	'begin': '00:00',
	'end': '12:00',
	'func': '>',
	'funcArg': '100'
})



with open('json_data.txt', 'w') as outfile:
    json.dump(data, outfile)




with open('json_data.txt') as json_file:
    data_ = json.load(json_file)
    for p in data_['frame']:
        print('relay: ' + str(p['relay']))
        print('begin: ' + p['begin'])
        print('end: ' + p['end'])
        print('func: ' + p['func'])
        print('funcArg: ' + p['funcArg'])
        print('')
