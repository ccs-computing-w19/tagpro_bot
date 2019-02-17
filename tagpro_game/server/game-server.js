import Game from './game'
import Map from './map'
import MapBlueprint from './map-blueprint'

let blueprint = new MapBlueprint().level_two
let map = new Map(blueprint)

export default class GameServer{
  constructor(io){
    this.io = io;
    this.games = [];
    this.gameIdCount = 0;
  } 

  addGame(socket){
    const thisGameId = this.gameIdCount++;
    let game = new Game(thisGameId, this.io, map, blueprint);
    game.addPlayer(socket);
    this.games[thisGameId] = game;
    socket.emit('newGameCreated', {gameId: thisGameId});
    socket.join(thisGameId.toString());
  }

  //TODO pass player name
  joinGame(thisGameId, socket){
    let game = this.games[thisGameId];
    if(game == undefined) {
      socket.emit('joinError', {message: "This room does not exist."});
    } else if (game.isFull()) {
      socket.emit('joinError', {message: "This room is full."});
    } else {
      game.addPlayer(socket);
      socket.join(thisGameId.toString(), () => {
	this.io.to(thisGameId.toString()).emit('playerJoined', {gameId: thisGameId});
	if(game.isFull()){
	  game.init();
	  game.emitToRoom('gameStarted', {
	    blueprint: game.blueprint,
	    players: game.players
	  });
	}

      });

    }
  }

}
