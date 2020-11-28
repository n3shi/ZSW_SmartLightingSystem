module.exports = function (queries) {
    let WebSocket = require('ws');
    let wss

    /**
     * Bind port ale listen for connections
     */
    const connect = function () {
        wss = new WebSocket.Server({port: 8050});

        wss.on('connection', function connection(ws, req) {
            _onSocketConnect(ws, req)
        })

        wss.on('error', e => {
            console.error("webserver error:", e)
        })
    }

    /**
     * Handle new client connection
     * @param socket
     * @param req
     * @private
     */
    const _onSocketConnect = function (socket, req) {
        let self = this

        socket.on('message', async data => {
            let d = await queries.rpi.findConfigByKey({key: data})
            socket.send(JSON.stringify(d))
        })

        socket.on('error', error => {
            _onSocketError(socket, e)
        })

    }

    /**
     * Handle connection errors
     * @param socket
     * @param error
     * @private
     */
    const _onSocketError = function (socket, error) {
        console.error("Websocket error:", error)
        socket.terminate()
    }

    connect()
}