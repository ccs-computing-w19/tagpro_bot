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
    this.IO.on("playerId", (data) => {
      game.playerId = data.playerId;
    });
    this.IO.on("gameStarted", (data) => {
      game.init(data.map, data.blueprint, data.players);
    });
  }
  emitCreateRequest(){
    this.IO.emit('createRequest');
  }
  emitJoinRequest(myGameId, myPlayerName){
    this.IO.emit('joinRequest', {gameId: myGameId, playerName: myPlayerName});
  }
  emitLeaveGame(){
    this.IO.emit('leaveGame');
  }

}
