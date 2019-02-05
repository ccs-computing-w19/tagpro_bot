import express from 'express';
import http from 'http';
import path from 'path';
import SocketIO from 'socket.io'

import Game from './game'
import Player from './player'

const app = express();
const server = http.Server(app);
const io = SocketIO(server);

const PORT = 4001
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(express.static(path.resolve(__dirname + '/../client')))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});


let Games = [];

io.on('connection', (socket) => {
  socket.emit('showMenu');
  socket.on('createRequest', () => {
    const thisGameId = (Math.random() * 100000) | 0; //TODO make sure no collisions happen
    let game = new Game(thisGameId);
    const thisPlayerId = (Math.random() * 100000) | 0; //TODO make sure no collisions happen
    game.players.push(new Player(thisPlayerId));
    Games[thisGameId] = game;
    socket.emit('newGameCreated', {gameId: thisGameId, playerId: thisPlayerId});
    socket.join(thisGameId.toString());
  });
  socket.on('joinRequest', (data) => {
    let game = Games[data.gameId];
    if(game == undefined) {
      socket.emit('joinError', {message: "This room does not exist."});
    } else if(game.isFull()) {
      socket.emit('joinError', {message: "This room is full."});
    } else {
      const thisPlayerId = (Math.random() * 100000) | 0; //DRY
      game.players.push(new Player(thisPlayerId));
      socket.join(data.gameId);
      data.playerId = thisPlayerId;
      io.to(data.gameId).emit('playerJoined', data);
    }
  });
});
