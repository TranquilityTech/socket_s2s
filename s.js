/**
 * Socket server
 * file: web.js
 */
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3330);

io.on('connection', function (socket) {
  setInterval(function(){
    socket.emit('news', { ts: new Date().toString() });
  }, 3000);
  socket.on('event', function (data) {
    console.log('[%s]', socket.id, data);
  });
});
