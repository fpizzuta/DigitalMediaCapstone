module.exports = function (io) {

    io.on('connection', function(socket){
        socket.on('chat message', function(msg){
          console.log('message: ' + msg);
        });
    });

    io.on('master', function(socket){
        socket.emit('master','You lose Doctor!');
        console.log('Master emitted');
    });

}