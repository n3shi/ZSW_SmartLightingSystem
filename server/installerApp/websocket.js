let WebSocketClient = require('ws')

let ws = new WebSocketClient("ws://localhost:5000");

ws.on('open', function open() {
    ws.send(123456789)
});

ws.on('message', function incoming(data) {
    console.log(JSON.stringify(JSON.parse(data),null,4));
    ws.close()
});
