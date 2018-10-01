var socketConfig = function (socketio) {

    //client establishes connection to the server
    socketio.on('connection', (socket) => {

        //new-message
        socket.on('send-message', (message) => {
            console.log("message sent is: ", message);
            socketio.emit('message', {
                text: message.text,
                name: message.username,
                time: new Date()
            });
        });
    });

}

module.exports = socketConfig;