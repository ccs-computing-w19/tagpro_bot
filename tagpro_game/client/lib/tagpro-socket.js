export default class TagproSocket{
  constructor() {
    this.IO = io.connect('http://localhost:4001');
  }
  initListeners(dom, game){
    this.IO.on('showMenu', () => {dom.showMenu()});
    this.IO.on('newGameCreated', (data) => {
      dom.updateMessage(`New game created with id: ${data.gameId}.`);
      game.gameId = data.gameId;
      game.playerId = data.playerId;
    });
    this.IO.on('joinError', (error) => {
      dom.updateMessage(error.message);
    });
    this.IO.on('leftGame', (data) => {
      dom.updateMessage(`Left game: ${data.gameId}.`);
    });
    this.IO.on("playerJoined", (data) => {
      dom.updateMessage(`${data.playerName} joined game: ${data.gameId}.`);
      game.gameId = data.gameId;
    });
    this.IO.on('playerId', (data) => {
      game.playerId = data.playerId;
    });
    this.IO.on('gameStarted', (data) => {
      console.log('Starting game...');
      dom.hideJoiner();
      dom.showGame();
      game.init(data.blueprint, data.players);
    });
    this.IO.on('playerUpdate', (data) => {
      game.updatePlayers(data.players);
    });
  }
  emitCreateRequest(){
    this.IO.emit('createRequest');
  }
  emitJoinRequest(myGameId, myPlayerName){
    this.IO.emit('joinRequest', {gameId: myGameId, playerName: myPlayerName});
  }
  emitKeyboard(keys){
    this.IO.emit('keyboard', {keys: keys});
  }
}
