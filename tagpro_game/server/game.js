import Player from './player'

export default class Game {

  constructor(myId) {
    this.id = myId;
    this.players = [];
    this.maxPlayers = 2;
  }
  isFull() {
    return this.players.length >= this.maxPlayers;
  }
}
