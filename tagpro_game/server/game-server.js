import Game from './game'
import Map from './map'
import MapBlueprint from './map-blueprint'
import Keyboard from './keyboard'

let keyboard = new Keyboard()
let blueprint = new MapBlueprint()[1]
let map = new Map()

export default class GameServer{
  constructor(io){
    this.io = io;
    this.games = [];
    this.gameIdCount = 0;
  } 

  function addGame(socket){
    const thisGameId = this.gameIdCount++;
    let game = new Game(thisGameId, io, keyboard, map, blueprint);
    game.addPlayer(socket);
    this.games[thisGameId] = game;
    socket.emit('newGameCreated', {gameId: thisGameId, playerId: thisPlayerId});
    socket.join(thisGameId.toString());
  }

  function joinGame(gameId, socket){
    let game = this.games[gameId];
    if(game == undefined) {
      socket.emit('joinError', {message: "This room does not exist."});
    } else if (game.isFull()) {
      socket.emit('joinError', {message: "This room is full."});
    } else {
      game.addPlayer(socket);
      socket.join(data.gameId);
      this.io.to(data.gameId).emit('playerJoined', {playerId: thisPlayerId, gameId: thisGameId});
    }
  }

}
