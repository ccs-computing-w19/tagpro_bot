import Player from './player'
import Flag from './flag'
import Spike from './spike'
import CollisionDectector from './collision-detector'
import Keyboard from './keyboard'
import {setGameLoop, clearGameLoop} from './gameloop'

export default class Game {

	constructor(myId, io, map, blueprint) { //TODO actually pass in this args
		this.id = myId
		this.io = io
		this.players = []
		this.maxPlayers = 2
		this.idCount = 0

		this.map = map
		this.players = []
		this.flags = []
		this.blueprint = blueprint
		this.spikes = []
		this.collisionDetector = {}     

		this.game_counter = 0
		this.running = false
	}
	isFull() {
		return this.players.length >= this.maxPlayers;
	}
	//adds new player to game
	//adds playerId and gameId to the player's socket object
	//broadcasts player id to player
	addPlayer(socket) { 
		let thisPlayerId = this.idCount++;
		let createdPlayer;
		if(thisPlayerId % 2 === 0){
			createdPlayer = new Player(
				thisPlayerId,
				socket,
				this.map,
				new Keyboard(),
				this.blueprint.bluePlayerOptions
			);
		}else{
			createdPlayer = new Player(
				thisPlayerId,
				socket,
				this.map,
				new Keyboard(),
				this.blueprint.redPlayerOptions
			);
		}
		this.players[thisPlayerId] = createdPlayer;

		socket.gameId = this.id;
		socket.playerId = thisPlayerId;

		socket.emit("playerId", {playerId: thisPlayerId});
	}

	/*
	getPlayerSockets(){
		let playerSockets = [];
		for(let i = 0; i < this.players.length; i++){
			playerSockets.push(this.players[i].socket);
		}
		return playerSockets;
	}

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
		this.running = true
		
		setGameLoop(() => {
			this.update()
			this.emitToRoom('playerUpdate', {players : this.players})
		})

		this.flags.push(new Flag(this.blueprint.blueFlagOptions))
		this.flags.push(new Flag(this.blueprint.redFlagOptions))

		if (this.blueprint.spikes) {
			this.blueprint.spikes.forEach(spikeOptions => {
				this.spikes.push(new Spike(spikeOptions))
			})
		}

		this.collisionDetector = new CollisionDectector(this.players, this.flags, this.spikes)
	}

	update() {
		this.updateScoreboard()
		this.players.forEach(player => player.move(player.keyboard.keys))
		this.spikes.forEach(spike => spike.move(this.game_counter))
		this.collisionDetector.checkAllCollisions()
		this.game_counter++
	}

	updateScoreboard() {
		/* TODO emit these scores:
		this.collisionDetector.redScore
		this.collisionDetector.blueScore
		*/
	}

}
