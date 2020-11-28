module.exports = function (queries) {
    let EventEmitter = require('events')
    let WebSocket = require('ws');
    let protocol = require('./protocol')
    let wss

    /**
     * Bind port ale listen for connections
     */
    const connect = function () {
        wss = new WebSocket.Server({port: this._private.port});

        wss.on('connection', function connection(ws, req) {
            _onSocketConnect(ws, req)
        });

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
    _onSocketConnect = function (socket, req) {
        let self = this

        socket.on('message', data => {

            //obsluga zapytania
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