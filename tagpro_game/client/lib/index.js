import TagproSocket from './tagpro-socket';
import Game from './game';
import Keyboard from './keyboard';
import Dom from './dom';

const tagproSocket = new TagproSocket();

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const keys = new Keyboard(tagproSocket).listenForEvents();

const game = new Game(context, canvas, keys);


function renderTimeBar(gameCounter, gameDuration) {
  const timeCanvas = document.getElementById('time-bar');
  const timeContext = timeCanvas.getContext('2d');

  timeContext.clearRect(0, 0, timeCanvas.width, timeCanvas.height);
  timeContext.beginPath();

  timeContext.fillStyle = '#d3d3d3';
  timeContext.fillRect(0, 0, timeCanvas.width, timeCanvas.height);
  timeContext.fillStyle = 'green';

  timeContext.fillRect(0, 0, timeCanvas.width * (1 - gameCounter / gameDuration), timeCanvas.height);
}


function initButtonListeners() {
  Dom.listenOn(document.getElementById('create_game'), 'click', () => {
    tagproSocket.emitCreateRequest();
    Dom.showJoiner();
    Dom.hideMenu();
  });

  Dom.listenOn(document.getElementById('join_game'), 'click', () => {
    Dom.showJoiner();
    Dom.showProgress();
    Dom.hideMenu();
  });

  Dom.listenOn(document.getElementById('btn_start'), 'click', () => {
    const gameId = document.getElementById('inputGameId').value;
    const playerName = document.getElementById('inputPlayerName').value;
    tagproSocket.emitJoinRequest(gameId, playerName);
  });
}

function setStage() {
  console.log('Setting stage');
  tagproSocket.initListeners(game);
  initButtonListeners();
}

setStage();

requestAnimationFrame(function gameLoop() {
  if (game.running && game.gameCounter < game.gameDuration) {
    renderTimeBar(game.gameCounter, game.gameDuration);
    game.draw();
  } else {
    Dom.hideGame();
  }
  requestAnimationFrame(gameLoop);
});
