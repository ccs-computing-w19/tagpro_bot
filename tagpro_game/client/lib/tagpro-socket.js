import Dom from './dom';

export default class TagproSocket {
  constructor() {
    this.IO = io.connect();
  }

  initListeners(game) {
    this.IO.on('showMenu', () => { Dom.showMenu(); });
    this.IO.on('newGameCreated', (data) => {
      Dom.updateMessage(`New game created with id: ${data.gameId}.`);
      game.gameId = data.gameId;
      game.playerId = data.playerId;
    });
    this.IO.on('joinError', (error) => {
      Dom.updateMessage(error.message);
    });
    this.IO.on('leftGame', (data) => {
      Dom.updateMessage(`Left game: ${data.gameId}.`);
    });
    this.IO.on('playerJoined', (data) => {
      Dom.updateMessage(`Waiting for players... ${data.playerCount}/${data.maxPlayers} players in game ${data.gameId}.`);
      game.gameId = data.gameId;
    });
    this.IO.on('playerId', (data) => {
      game.playerId = data.playerId;
    });
    this.IO.on('gameStarted', (data) => {
      console.log('Starting game...');
      Dom.hideJoiner();
      Dom.hideProgress();
      Dom.showGame();
      game.init(data.blueprint, data.players);
    });
    this.IO.on('gameEnded', (data) => {
      game.running = false;
      alert(data.winnerMessage);
    });
    this.IO.on('time', (data) => {
      game.gameCounter = data.gameCounter;
      if (data.gameDuration !== undefined) {
        game.gameDuration = data.gameDuration;
      }
    });
    this.IO.on('playerUpdate', (data) => {
      game.updatePlayers(data.players);
    });
    this.IO.on('scoreUpdate', (data) => {
      game.redScore = data.redScore;
      game.blueScore = data.blueScore;
      game.updateScoreboard();
    });
    /*
  this.IO.on('mapupdate', t.handleMapUpdate);
  this.IO.on('bomb', function(e) {
    renderer.createExplosion(e.x, e.y);
  });
  this.IO.socket.on('splat', function(e) {
    renderer.drawSplat(e.x, e.y, e.t, true, e.temp);
  });
  this.IO.socket.on('spawn', function(e) {
    renderer.drawSpawn(e.x, e.y, e.t, e.w);
  });
  */
  }

  emitCreateRequest() {
    this.IO.emit('createRequest');
  }

  emitJoinRequest(myGameId, myPlayerName) {
    this.IO.emit('joinRequest', { gameId: myGameId, playerName: myPlayerName });
  }

  emitKeyboard(keys) {
    this.IO.emit('keyboard', { keys });
  }
}
