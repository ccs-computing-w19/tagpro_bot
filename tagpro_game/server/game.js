import Player from './player'
import Flag from './flag'
import Spike from './spike'
import CollisionDectector from './collision-detector'

export default class Game {

  constructor(myId, io, {keyboard = {}, map = {}, blueprint = {}} = {}) { //TODO actually pass in this args
    this.id = myId;
		this.io = io;
    this.players = [];
    this.maxPlayers = 2;
    this.idCount = 0;

    this.keyboard = keyboard
    this.map = map
    this.players = []
    this.flags = []
    this.blueprint = blueprint
    this.spikes = []
    this.collisionDetector = {}     
    this.running = false
  }
  isFull() {
    return this.players.length >= this.maxPlayers;
  }

  addPlayer(socket) { //also checks if the room is full and if so starts game
    let thisPlayerId = this.idCount++;
		if(thisPlayerId % 2 == 0){
			this.players[playerId] = new Player(thisPlayerId, socket, map, this.blueprint.bluePlayerOptions);
		}else{
			this.players[playerId] = new Player(thisPlayerId, socket, map, this.blueprint.redPlayerOptions);
		}
		socket.emit("playerId", {playerId: thisPlayerId});
		if(isFull()){
			init();
			emitToRoom('gameStarted', {map: this.map, blueprint: this.blueprint, players: this.players});
		}
  }

  getPlayerSockets(){
    let playerSockets = [];
    for(let i = 0; i < this.players.length; i++){
      playerSockets.push(this.players[i].socket);
    }
    return playerSockets;
  }

	/*
  //emits to all players in this game
  emitToAllPlayers(eventName, data) {
    this.getPlayerSockets().forEach( (socket) => {
      socket.emit(eventName, data);
    });
  }
	*/

	//emits to the room containing all players in this game
  emitToRoom(eventName, data) {
		this.io.to(this.id).emit(eventName, data);
  }




  init() {
    let self = this
    self.running = true

    self.players.push(new Player(self.map, self.blueprint.redPlayerOptions))
    self.players.push(new Player(self.map, self.blueprint.bluePlayerOptions))

    self.flags.push(new Flag(self.blueprint.blueFlagOptions))
    self.flags.push(new Flag(self.blueprint.redFlagOptions))

    if (self.blueprint.spikes) {
      self.blueprint.spikes.forEach(spikeOptions => {
	self.spikes.push(new Spike(spikeOptions))
      })
    }
    self.collisionDetector = new CollisionDectector(self.players, self.flags, self.spikes)
  }

  update(game_counter) {
    this.updateScoreboard()
    this.players.forEach(player => player.move(this.keyboard.keys))
    this.spikes.forEach(spike => spike.move(game_counter))
    this.collisionDetector.checkAllCollisions()
  }

  updateScoreboard() {
    /* TODO emit these scores:
    this.collisionDetector.redScore
    this.collisionDetector.blueScore
    */
  }

}
