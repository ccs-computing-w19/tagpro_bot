import Player from './player';
import Flag from './flag';
import Spike from './spike';
import Map from './map';

export default class Game {
  constructor(context, canvas, keyboard) {
    this.gameId = undefined;
    this.playerId = undefined;

    this.canvas = canvas;
    this.context = context;
    this.keyboard = keyboard;
    this.map = {};
    this.players = [];
    this.flags = [];
    this.blueprint = {};
    this.spikes = [];
    this.running = false;

    this.redScore = 0;
    this.blueScore = 0;
    this.gameCounter = 0;
    this.gameDuration = undefined;
  }

  init(blueprint, sPlayers) {
    this.running = true;

    this.blueprint = blueprint;
    this.map = new Map(blueprint);

    this.updatePlayers(sPlayers);

    this.flags.push(new Flag(this.blueprint.blueFlagOptions));
    this.flags.push(new Flag(this.blueprint.redFlagOptions));

    if (this.blueprint.spikes) {
      this.blueprint.spikes.forEach((spikeOptions) => {
        this.spikes.push(new Spike(spikeOptions));
      });
    }

    this.canvas.setAttribute('width', `${this.map.cols * this.map.tsize}px`);
    this.canvas.setAttribute('height', `${this.map.rows * this.map.tsize}px`);
  }

  // sPlayers are server players
  updatePlayers(sPlayers) {
    sPlayers.forEach((sPlayer, id) => {
      if (this.players[id] === undefined) {
        this.players[id] = new Player(
          id,
          sPlayer.map,
          sPlayer.x,
          sPlayer.y,
          sPlayer.radius,
          sPlayer.color,
          sPlayer.controls,
          sPlayer.acceleration,
        );
      }
      for (const key in sPlayer) {
        this.players[id][key] = sPlayer[key];
      }
    });
  }

  updateScoreboard() {
    document.querySelector('#red-score').innerHTML = this.redScore;
    document.querySelector('#blue-score').innerHTML = this.blueScore;
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.map.render(this.context);
    this.flags.forEach(flag => flag.draw(this.context));
    this.spikes.forEach(spike => spike.draw(this.context));
    this.players.forEach(player => player.draw(this.context));
  }
}
