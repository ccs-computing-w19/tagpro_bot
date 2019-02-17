import express from 'express';
import http from 'http';
import path from 'path';
import SocketIO from 'socket.io';
import GameServer from 'game-server';

const app = express();
const server = http.Server(app);
const io = SocketIO(server);

const PORT = 4001
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//point static resources and index.html at client directory
app.use(express.static(path.resolve(__dirname + '/../client')))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

//handle socket.io connections
let gameServer = new GameServer(io);

io.on('connection', (socket) => {
  socket.emit('showMenu');

  socket.on('createRequest', () => {
    gameServer.addGame(socket);
  });

  socket.on('joinRequest', (data) => {
    gameServer.joinGame(data.gameId, socket);
  });

  socket.on('keyboard', (data) => {
    let game = gameServer.games[socket.gameId]
    if(game != undefined && game.running){
      let player = game.players[socket.playerId]
      if(player != undefined){
	player.keyboard.updateKeys(data.keys);
      }
    }
  });

  socket.on('disconnect', () => {
    //TODO remove player from game
  });
});
