module.exports = function (queries) {
    let EventEmitter = require('events')
    let WebSocket = require('ws');
    let protocol = require('./protocol')
    let wss

    /**
     * Bind port ale listen for connections
     */
    const connect = function() {

        wss = new WebSocket.Server({ port: this._private.port });

        wss.on('connection', function connection(ws, req) {
            _onSocketConnect(ws, req)
        });

        wss.on('error', e => {
            console.error("webserver error:", e)
        })

        this._private.server = wss
    }

        /**
         * Handle new client connection
         * @param socket
         * @param req
         * @private
         */
         const _onSocketConnect = function(socket, req) {
            let self = this

            socket.on('message', data => {

                self._onSocketReceived(socket, data)

                //if there is a request in queue
                if(socket.session.queue.length > 0){

                    //remove from queue
                    let send = socket.session.queue.shift()

                    //send data
                    socket.send(send)
                    socket.session.requestsSend ++;
                }
            })

            socket.on('error', error =>{
                self._onSocketError(socket, e)
            })

            socket.sendMessage = function(data) {

                //if server received answer for all requests then send next request
                if(socket.session.responsesReceived == socket.session.requestsSend){

                    //send data
                    socket.send(data)
                    socket.session.requestsSend ++;
                }
                //add new request to the queue
                else{
                    //console.log("@@@@@@@@@@@@@@@@@@@@order added")
                    socket.session.queue.push(data)
                }

            }

            self.emit('connection', socket)
        }

        /**
         * Handle data received from connected client
         * @param socket
         * @param data
         * @private
         */
        _onSocketReceived(socket, data) {

            try {
                //parse and process message
                data = protocol.parse(data)

                //console.log(" # websocket data received")
                //console.log("   data session:", socket.session)
                //console.log("   endpoint:", data.functionName)

                if(this._events[data.functionName]){
                    this.emit(data.functionName, socket, data)
                }else{
                    socket.send(protocol.buildDoneMessage(data.transaction+1))
                    throw Error("Webserver emits unlistened event. Eventname:" + data.functionName)
                }
            }
            catch(e){
                console.error(e)
            }
        }

        /**
         * Handle connection errors
         * @param socket
         * @param error
         * @private
         */
        _onSocketError(socket, error) {
            console.error("Websocket error:", error)
            socket.terminate()
        }


    }
}