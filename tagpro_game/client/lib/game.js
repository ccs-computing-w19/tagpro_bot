import Player from './player'
import Flag from './flag'
import Spike from './spike'
import CollisionDectector from './collision-detector'

export default class Game {
    gameId
    playerId
  constructor(context, canvas, keyboard) {
    this.canvas = canvas
    this.context = context
    this.keyboard = keyboard
    this.map = {}
    this.players = []
    this.flags = []
    this.blueprint = {}
    this.spikes = []
    this.collisionDetector = {}     
    this.running = false
  }

  init(map, blueprint, sPlayers) {
    this.map = map
    this.blueprint = blueprint
    updatePlayers(sPlayers);
    this.running = true
    this.canvas.setAttribute("width", `${map.cols * map.tsize}px`)
    this.canvas.setAttribute("height", `${map.rows * map.tsize}px`)
  }

  //sPlayers are server players
  updatePlayers(sPlayers) {
    players.forEach( (id, sPlayer, sPlayers) => {
      if(this.players[id] == undefined){
	this.players[id] = new Player(id, sPlayer.map, sPlayer.x, sPlayer.y, sPlayer.radius, sPlayer.color, sPlayer.controls, sPlayer.acceleration);
      }
      sPlayer.forEach( (key, value, sPlayer) => {
	this.players[id][key] = value;
      });
    });
  }

  updateScoreboard() {
    document.querySelector("#red-score").innerHTML = this.collisionDetector.redScore
    document.querySelector("#blue-score").innerHTML = this.collisionDetector.blueScore
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.map.render(this.context)
    this.flags.forEach(flag => flag.draw(this.context))
    this.spikes.forEach(spike => spike.draw(this.context))
    this.players.forEach(player => player.draw(this.context))
  }
}
