import TagproSocket from './tagpro-socket'
import Game from './game'
import Keyboard from './keyboard'
import Map from './map'
import MapBlueprint from './map-blueprint'
import Dom from './dom'

let tagpro_socket = new TagproSocket();

let canvas = document.getElementById('game')
let context = canvas.getContext('2d')
let keys = new Keyboard(tagpro_socket).listenForEvents()

const dom = new Dom()

let game = new Game(context, canvas, keys);
let gameCounter = 0
let timeLimit = 3600

setStage()

requestAnimationFrame(function gameLoop(){
  if (game.running && gameCounter < timeLimit) {
    renderTimeBar(game.gameCounter)
    game.draw()
  } else if (gameCounter === timeLimit) {
    writeTotalScores(game)
  } else {
    dom.hideGame()
  }
  requestAnimationFrame(gameLoop)
})

function renderTimeBar(gameCounter) {
  var timeCanvas = document.getElementById('time-bar')
  var timeContext = timeCanvas.getContext('2d')

  timeContext.clearRect(0, 0, timeCanvas.width, timeCanvas.height)
  timeContext.beginPath()

  timeContext.fillStyle = "#d3d3d3"
  timeContext.fillRect(0, 0, timeCanvas.width, timeCanvas.height)
  timeContext.fillStyle = "green"

  timeContext.fillRect(0, 0, timeCanvas.width * (1 - gameCounter / timeLimit), timeCanvas.height)
}

function setStage() {
  console.log("Setting stage")
  tagpro_socket.initListeners(dom, game);
  initButtonListeners();
}

function writeTotalScores(game) {

  if (game && game.collisionDetector.redScore > game.collisionDetector.blueScore) {
    alert("Red Won!")
    localStorage.setItem('redTotal', parseInt(localStorage.getItem('redTotal')) + 1)
  } else if (game && game.collisionDetector.redScore < game.collisionDetector.blueScore) {
    alert("Blue Won!")
    localStorage.setItem('blueTotal', parseInt(localStorage.getItem('blueTotal')) + 1)
  } else {
    alert("Tie Game!")
  }
}

function initButtonListeners(){
  dom.listenOn(document.getElementById("create_game"), 'click', () => {
    tagpro_socket.emitCreateRequest();
    dom.hideMenu();
  });

  dom.listenOn(document.getElementById("join_game"), 'click', () => {
    dom.showJoiner();
    dom.hideMenu();
  });

  dom.listenOn(document.getElementById("btn_start"), 'click', () => {
    let gameId = document.getElementById("inputGameId").value;
    let playerName = document.getElementById("inputPlayerName").value;
    tagpro_socket.emitJoinRequest(gameId, playerName);
  });

}

