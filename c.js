var socket = require('socket.io-client')('http://localhost:3330');

socket.on('connect', function(){
    console.log('[%s]on connect...', socket.id);
});

socket.on('event', function(data){
  console.log('[%s]on event...', socket.id, data);
});

socket.on('news', function(data){
  console.log('[%s]on news...', socket.id, data);
    socket.emit('event', {
          msg: 'test', ts: new Date()
        });
});

socket.on('disconnect', function(){
    console.log('[%s]on disconnect....', socket.id);
});
