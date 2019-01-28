var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
server.listen(4001);
// WARNING: app.listen(80) will NOT work here!
app.use(express.static(path.resolve(__dirname + '/../client')))
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

io.on('connection', function (socket) {
  socket.emit('playerJoined', { player: 'hi from server' });
  socket.on('playerResponse', function (data) {
    console.log(data.player);
  });
});
