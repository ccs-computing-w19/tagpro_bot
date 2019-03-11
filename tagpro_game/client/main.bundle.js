/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom.js":
/*!********************!*\
  !*** ./lib/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dom; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Dom =\n/*#__PURE__*/\nfunction () {\n  function Dom() {\n    _classCallCheck(this, Dom);\n  }\n\n  _createClass(Dom, null, [{\n    key: \"level\",\n    value: function level(event) {\n      return event.currentTarget.getAttribute('id');\n    }\n  }, {\n    key: \"listenOn\",\n    value: function listenOn(element, type, fn) {\n      element.addEventListener(type, fn);\n    }\n  }, {\n    key: \"makeVisible\",\n    value: function makeVisible(element) {\n      element.style.visibility = 'visible';\n    }\n  }, {\n    key: \"makeHidden\",\n    value: function makeHidden(element) {\n      element.style.visibility = 'hidden';\n    }\n  }, {\n    key: \"display\",\n    value: function display(element) {\n      element.style.display = 'block';\n    }\n  }, {\n    key: \"hide\",\n    value: function hide(element) {\n      element.style.display = 'none';\n    }\n  }, {\n    key: \"showMenu\",\n    value: function showMenu() {\n      document.querySelector('div.start-menu').style.display = 'block';\n      document.querySelectorAll('button.start-button').forEach(function (button) {\n        return button.style.display = 'block';\n      });\n    }\n  }, {\n    key: \"hideMenu\",\n    value: function hideMenu() {\n      document.querySelector('div.start-menu').style.display = 'none';\n    }\n  }, {\n    key: \"hideGame\",\n    value: function hideGame() {\n      Array.from(Dom.canvases).forEach(function (canvas) {\n        return Dom.hide(canvas);\n      });\n      Dom.makeHidden(Dom.scoreBoard);\n    }\n  }, {\n    key: \"showGame\",\n    value: function showGame() {\n      Array.from(Dom.canvases).forEach(function (canvas) {\n        return Dom.display(canvas);\n      });\n      Dom.makeVisible(Dom.scoreBoard);\n    }\n  }, {\n    key: \"showProgress\",\n    value: function showProgress() {\n      Dom.makeVisible(Dom.progress);\n    }\n  }, {\n    key: \"hideProgress\",\n    value: function hideProgress() {\n      Dom.makeHidden(Dom.progress);\n    }\n  }, {\n    key: \"showJoiner\",\n    value: function showJoiner() {\n      Dom.display(Dom.joiner);\n    }\n  }, {\n    key: \"hideJoiner\",\n    value: function hideJoiner() {\n      Dom.hide(Dom.joiner);\n    }\n  }, {\n    key: \"updateMessage\",\n    value: function updateMessage(text) {\n      document.getElementById('message').innerText = text;\n    }\n  }, {\n    key: \"buttons\",\n    get: function get() {\n      return document.querySelectorAll('button.start-button');\n    }\n  }, {\n    key: \"canvases\",\n    get: function get() {\n      return document.querySelectorAll('canvas.game-canvas');\n    }\n  }, {\n    key: \"progress\",\n    get: function get() {\n      return document.getElementById('progress');\n    }\n  }, {\n    key: \"joiner\",\n    get: function get() {\n      return document.querySelector('div.join-game-wrapper');\n    }\n  }, {\n    key: \"scoreBoard\",\n    get: function get() {\n      return document.getElementById('score-board-container');\n    }\n  }]);\n\n  return Dom;\n}();\n\n\n\n//# sourceURL=webpack:///./lib/dom.js?");

/***/ }),

/***/ "./lib/flag.js":
/*!*********************!*\
  !*** ./lib/flag.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Flag; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Flag =\n/*#__PURE__*/\nfunction () {\n  function Flag(options) {\n    _classCallCheck(this, Flag);\n\n    this.x = options.x;\n    this.y = options.y;\n    this.color = options.color;\n    this.flagImage = undefined;\n    this.tsize = options.tsize;\n    this.isCaptured = false;\n    this.flagImage = new Image();\n    this.flagImage.src = './lib/assets/tiles.png';\n  }\n\n  _createClass(Flag, [{\n    key: \"determineFlagYTilePxl\",\n    value: function determineFlagYTilePxl() {\n      if (this.isCaptured) {\n        return 80;\n      }\n\n      return 40;\n    }\n  }, {\n    key: \"determineFlagXTilePxl\",\n    value: function determineFlagXTilePxl() {\n      if (this.color === 'blue') {\n        return 600;\n      }\n\n      if (this.color === 'red') {\n        return 560;\n      }\n\n      return -1;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(context) {\n      context.drawImage(this.flagImage, this.determineFlagXTilePxl(), this.determineFlagYTilePxl(), this.tsize, this.tsize, this.x - this.tsize / 2, this.y - this.tsize / 2, this.tsize, this.tsize);\n    }\n  }]);\n\n  return Flag;\n}();\n\n\n\n//# sourceURL=webpack:///./lib/flag.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./lib/player.js\");\n/* harmony import */ var _flag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flag */ \"./lib/flag.js\");\n/* harmony import */ var _spike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spike */ \"./lib/spike.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ \"./lib/map.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game(context, canvas, keyboard) {\n    _classCallCheck(this, Game);\n\n    this.gameId = undefined;\n    this.playerId = undefined;\n    this.canvas = canvas;\n    this.context = context;\n    this.keyboard = keyboard;\n    this.map = {};\n    this.players = [];\n    this.flags = [];\n    this.blueprint = {};\n    this.spikes = [];\n    this.running = false;\n    this.redScore = 0;\n    this.blueScore = 0;\n    this.gameCounter = 0;\n    this.gameDuration = undefined;\n  }\n\n  _createClass(Game, [{\n    key: \"init\",\n    value: function init(blueprint, sPlayers) {\n      var _this = this;\n\n      this.running = true;\n      this.blueprint = blueprint;\n      this.map = new _map__WEBPACK_IMPORTED_MODULE_3__[\"default\"](blueprint);\n      this.updatePlayers(sPlayers);\n      this.flags.push(new _flag__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.blueprint.blueFlagOptions));\n      this.flags.push(new _flag__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.blueprint.redFlagOptions));\n\n      if (this.blueprint.spikes) {\n        this.blueprint.spikes.forEach(function (spikeOptions) {\n          _this.spikes.push(new _spike__WEBPACK_IMPORTED_MODULE_2__[\"default\"](spikeOptions));\n        });\n      }\n\n      this.canvas.setAttribute('width', \"\".concat(this.map.cols * this.map.tsize, \"px\"));\n      this.canvas.setAttribute('height', \"\".concat(this.map.rows * this.map.tsize, \"px\"));\n    } // sPlayers are server players\n\n  }, {\n    key: \"updatePlayers\",\n    value: function updatePlayers(sPlayers) {\n      var _this2 = this;\n\n      sPlayers.forEach(function (sPlayer, id) {\n        if (_this2.players[id] === undefined) {\n          _this2.players[id] = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](id, sPlayer.map, sPlayer.x, sPlayer.y, sPlayer.radius, sPlayer.color, sPlayer.controls, sPlayer.acceleration);\n        }\n\n        for (var key in sPlayer) {\n          _this2.players[id][key] = sPlayer[key];\n        }\n      });\n    }\n  }, {\n    key: \"updateScoreboard\",\n    value: function updateScoreboard() {\n      document.querySelector('#red-score').innerHTML = this.redScore;\n      document.querySelector('#blue-score').innerHTML = this.blueScore;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var _this3 = this;\n\n      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      this.map.render(this.context);\n      this.flags.forEach(function (flag) {\n        return flag.draw(_this3.context);\n      });\n      this.spikes.forEach(function (spike) {\n        return spike.draw(_this3.context);\n      });\n      this.players.forEach(function (player) {\n        return player.draw(_this3.context);\n      });\n    }\n  }]);\n\n  return Game;\n}();\n\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tagpro_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagpro-socket */ \"./lib/tagpro-socket.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./lib/game.js\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard */ \"./lib/keyboard.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./lib/dom.js\");\n\n\n\n\nvar tagproSocket = new _tagpro_socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar canvas = document.getElementById('game');\nvar context = canvas.getContext('2d');\nvar keys = new _keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](tagproSocket).listenForEvents();\nvar game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context, canvas, keys);\n\nfunction renderTimeBar(gameCounter, gameDuration) {\n  var timeCanvas = document.getElementById('time-bar');\n  var timeContext = timeCanvas.getContext('2d');\n  timeContext.clearRect(0, 0, timeCanvas.width, timeCanvas.height);\n  timeContext.beginPath();\n  timeContext.fillStyle = '#d3d3d3';\n  timeContext.fillRect(0, 0, timeCanvas.width, timeCanvas.height);\n  timeContext.fillStyle = 'green';\n  timeContext.fillRect(0, 0, timeCanvas.width * (1 - gameCounter / gameDuration), timeCanvas.height);\n}\n\nfunction initButtonListeners() {\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listenOn(document.getElementById('create_game'), 'click', function () {\n    tagproSocket.emitCreateRequest();\n    _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showJoiner();\n    _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hideMenu();\n  });\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listenOn(document.getElementById('join_game'), 'click', function () {\n    _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showJoiner();\n    _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showProgress();\n    _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hideMenu();\n  });\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listenOn(document.getElementById('btn_start'), 'click', function () {\n    var gameId = document.getElementById('inputGameId').value;\n    var playerName = document.getElementById('inputPlayerName').value;\n    tagproSocket.emitJoinRequest(gameId, playerName);\n  });\n}\n\nfunction setStage() {\n  console.log('Setting stage');\n  tagproSocket.initListeners(game);\n  initButtonListeners();\n}\n\nsetStage();\nrequestAnimationFrame(function gameLoop() {\n  if (game.running && game.gameCounter < game.gameDuration) {\n    renderTimeBar(game.gameCounter, game.gameDuration);\n    game.draw();\n  } else {\n    _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hideGame();\n  }\n\n  requestAnimationFrame(gameLoop);\n});\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ }),

/***/ "./lib/keyboard.js":
/*!*************************!*\
  !*** ./lib/keyboard.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Keyboard; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Keyboard =\n/*#__PURE__*/\nfunction () {\n  function Keyboard(tagproSocket) {\n    _classCallCheck(this, Keyboard);\n\n    this.tagproSocket = tagproSocket;\n    this.keys = {\n      leftArrow: false,\n      upArrow: false,\n      rightArrow: false,\n      downArrow: false\n    };\n  }\n\n  _createClass(Keyboard, [{\n    key: \"listenForEvents\",\n    value: function listenForEvents() {\n      window.addEventListener('keydown', this.onKeyDown.bind(this));\n      window.addEventListener('keyup', this.onKeyUp.bind(this));\n      return this;\n    }\n  }, {\n    key: \"isKeyPressed\",\n    value: function isKeyPressed() {\n      var flag = false;\n\n      for (var prop in this.keys) {\n        if (this.keys[prop]) {\n          flag = true;\n        }\n      }\n\n      return flag;\n    }\n  }, {\n    key: \"onKeyDown\",\n    value: function onKeyDown(event) {\n      var that = this.keys;\n\n      switch (event.keyCode) {\n        case 37:\n          that.leftArrow = true;\n          event.preventDefault();\n          break;\n\n        case 38:\n          that.upArrow = true;\n          event.preventDefault();\n          break;\n\n        case 39:\n          that.rightArrow = true;\n          event.preventDefault();\n          break;\n\n        case 40:\n          that.downArrow = true;\n          event.preventDefault();\n          break;\n\n        default:\n          break;\n      }\n\n      this.tagproSocket.emitKeyboard(that);\n    }\n  }, {\n    key: \"onKeyUp\",\n    value: function onKeyUp(event) {\n      var that = this.keys;\n\n      switch (event.keyCode) {\n        case 37:\n          that.leftArrow = false;\n          event.preventDefault();\n          break;\n\n        case 38:\n          that.upArrow = false;\n          event.preventDefault();\n          break;\n\n        case 39:\n          that.rightArrow = false;\n          event.preventDefault();\n          break;\n\n        case 40:\n          that.downArrow = false;\n          event.preventDefault();\n          break;\n\n        default:\n          break;\n      }\n\n      this.tagproSocket.emitKeyboard(that);\n    }\n  }]);\n\n  return Keyboard;\n}();\n\n\n\n//# sourceURL=webpack:///./lib/keyboard.js?");

/***/ }),

/***/ "./lib/map.js":
/*!********************!*\
  !*** ./lib/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Map =\n/*#__PURE__*/\nfunction () {\n  function Map(blueprint) {\n    _classCallCheck(this, Map);\n\n    this.cols = blueprint.columns;\n    this.rows = blueprint.rows;\n    this.tsize = blueprint.tsize;\n    this.tiles = blueprint.tiles;\n    this.barriers = blueprint.barriers;\n    this.tilesImage = new Image();\n    this.tilesImage.src = './lib/assets/tiles.png';\n  }\n\n  _createClass(Map, [{\n    key: \"convertXYtoTileIndex\",\n    value: function convertXYtoTileIndex(x, y) {\n      var col = Math.floor(x / this.tsize);\n      var row = Math.floor(y / this.tsize);\n      return row * this.cols + col;\n    }\n  }, {\n    key: \"getTileValueAtXY\",\n    value: function getTileValueAtXY(x, y) {\n      return this.tiles[this.convertXYtoTileIndex(x, y)];\n    }\n  }, {\n    key: \"isWallCollision\",\n    value: function isWallCollision(x, y) {\n      var tileValue = this.getTileValueAtXY(x, y);\n      return this.barriers.some(function (barrier) {\n        return barrier === tileValue;\n      });\n    }\n  }, {\n    key: \"getTile\",\n    value: function getTile(col, row) {\n      return this.tiles[row * this.cols + col];\n    }\n  }, {\n    key: \"render\",\n    value: function render(context) {\n      for (var c = 0; c < this.cols; c += 1) {\n        for (var r = 0; r < this.rows; r += 1) {\n          var tile = this.getTile(c, r);\n\n          if (tile !== 0) {\n            // 0 => empty tile\n            context.drawImage(this.tilesImage, // image\n            (tile - 1) % 16 * this.tsize, // source x\n            Math.floor((tile - 1) / 16) * this.tsize, // source y\n            this.tsize, // source width\n            this.tsize, // source height\n            c * this.tsize, // target x\n            r * this.tsize, // target y\n            this.tsize, // target width\n            this.tsize // target height\n            );\n          }\n        }\n      }\n    }\n  }]);\n\n  return Map;\n}();\n\n\n\n//# sourceURL=webpack:///./lib/map.js?");

/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player(id, map) {\n    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},\n        _ref$x = _ref.x,\n        x = _ref$x === void 0 ? 100 : _ref$x,\n        _ref$y = _ref.y,\n        y = _ref$y === void 0 ? 100 : _ref$y,\n        _ref$radius = _ref.radius,\n        radius = _ref$radius === void 0 ? 20 : _ref$radius,\n        _ref$color = _ref.color,\n        color = _ref$color === void 0 ? 'blue' : _ref$color,\n        _ref$controls = _ref.controls,\n        controls = _ref$controls === void 0 ? 'arrows' : _ref$controls,\n        _ref$acceleration = _ref.acceleration,\n        acceleration = _ref$acceleration === void 0 ? 0.1 : _ref$acceleration,\n        _ref$name = _ref.name,\n        name = _ref$name === void 0 ? 'someball' : _ref$name;\n\n    _classCallCheck(this, Player);\n\n    this.id = id;\n    this.name = name;\n    this.spawnPosition = {\n      x: x,\n      y: y\n    };\n    this.x = x;\n    this.y = y;\n    this.dx = 0;\n    this.dy = 0;\n    this.radius = radius;\n    this.color = color;\n    this.playerImg = new Image();\n    this.playerImg.src = './lib/assets/tiles.png';\n    this.controls = controls;\n    this.map = map;\n    this.hasFlag = false;\n    this.acceleration = acceleration;\n    this.frozen = false;\n    this.lastSync = {}; // stores player fields as keys and the server tick they were last updated\n  }\n\n  _createClass(Player, [{\n    key: \"determinePlayerTilePxl\",\n    value: function determinePlayerTilePxl() {\n      if (this.color === 'blue') {\n        return 600;\n      }\n\n      if (this.color === 'red') {\n        return 560;\n      }\n\n      return -1;\n    }\n  }, {\n    key: \"determineFlagTilePxl\",\n    value: function determineFlagTilePxl() {\n      if (this.color === 'blue') {\n        return 560;\n      }\n\n      if (this.color === 'red') {\n        return 600;\n      }\n\n      return -1;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(context) {\n      if (this.frozen) {\n        context.globalAlpha = 0.5;\n      }\n\n      context.drawImage(this.playerImg, this.determinePlayerTilePxl(), 0, this.map.tsize, this.map.tsize, this.x - this.radius, this.y - this.radius, this.map.tsize, this.map.tsize);\n      context.globalAlpha = 1.0;\n\n      if (this.hasFlag) {\n        context.drawImage(this.playerImg, this.determineFlagTilePxl(), 40, this.map.tsize, this.map.tsize, this.x, this.y - 50, this.map.tsize, this.map.tsize);\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n\n\n//# sourceURL=webpack:///./lib/player.js?");

/***/ }),

/***/ "./lib/spike.js":
/*!**********************!*\
  !*** ./lib/spike.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Spike; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Spike =\n/*#__PURE__*/\nfunction () {\n  function Spike(options) {\n    _classCallCheck(this, Spike);\n\n    this.x = options.x;\n    this.y = options.y;\n    this.SpikeYTilePxl = 0;\n    this.SpikeXTilePxl = 480;\n    this.originY = options.y;\n    this.tsize = options.tsize;\n    this.moving = options.moving || false;\n    this.amplitude = options.amplitude || 40;\n    this.spikeImage = new Image();\n    this.spikeImage.src = './lib/assets/tiles.png';\n  }\n\n  _createClass(Spike, [{\n    key: \"move\",\n    value: function move(gameCounter) {\n      if (this.moving) {\n        this.y = this.originY + this.amplitude * Math.sin((gameCounter + this.x) % 360 * (Math.PI / 180));\n      }\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(context) {\n      context.drawImage(this.spikeImage, this.SpikeXTilePxl, this.SpikeYTilePxl, this.tsize, this.tsize, this.x - this.tsize / 2, this.y - this.tsize / 2, this.tsize, this.tsize);\n    }\n  }]);\n\n  return Spike;\n}();\n\n\n\n//# sourceURL=webpack:///./lib/spike.js?");

/***/ }),

/***/ "./lib/tagpro-socket.js":
/*!******************************!*\
  !*** ./lib/tagpro-socket.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TagproSocket; });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./lib/dom.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar TagproSocket =\n/*#__PURE__*/\nfunction () {\n  function TagproSocket() {\n    _classCallCheck(this, TagproSocket);\n\n    this.IO = io.connect();\n  }\n\n  _createClass(TagproSocket, [{\n    key: \"initListeners\",\n    value: function initListeners(game) {\n      this.IO.on('showMenu', function () {\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showMenu();\n      });\n      this.IO.on('newGameCreated', function (data) {\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateMessage(\"New game created with id: \".concat(data.gameId, \".\"));\n        game.gameId = data.gameId;\n        game.playerId = data.playerId;\n      });\n      this.IO.on('joinError', function (error) {\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateMessage(error.message);\n      });\n      this.IO.on('leftGame', function (data) {\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateMessage(\"Left game: \".concat(data.gameId, \".\"));\n      });\n      this.IO.on('playerJoined', function (data) {\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateMessage(\"Waiting for players... \".concat(data.playerCount, \"/\").concat(data.maxPlayers, \" players in game \").concat(data.gameId, \".\"));\n        game.gameId = data.gameId;\n      });\n      this.IO.on('playerId', function (data) {\n        game.playerId = data.playerId;\n      });\n      this.IO.on('gameStarted', function (data) {\n        console.log('Starting game...');\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hideJoiner();\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hideProgress();\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showGame();\n        game.init(data.blueprint, data.players);\n      });\n      this.IO.on('gameEnded', function (data) {\n        game.running = false;\n        alert(data.winnerMessage);\n      });\n      this.IO.on('time', function (data) {\n        game.gameCounter = data.gameCounter;\n\n        if (data.gameDuration !== undefined) {\n          game.gameDuration = data.gameDuration;\n        }\n      });\n      this.IO.on('playerUpdate', function (data) {\n        game.updatePlayers(data.players);\n      });\n      this.IO.on('scoreUpdate', function (data) {\n        game.redScore = data.redScore;\n        game.blueScore = data.blueScore;\n        game.updateScoreboard();\n      });\n      /*\n      this.IO.on('mapupdate', t.handleMapUpdate);\n      this.IO.on('bomb', function(e) {\n      renderer.createExplosion(e.x, e.y);\n      });\n      this.IO.socket.on('splat', function(e) {\n      renderer.drawSplat(e.x, e.y, e.t, true, e.temp);\n      });\n      this.IO.socket.on('spawn', function(e) {\n      renderer.drawSpawn(e.x, e.y, e.t, e.w);\n      });\n      */\n    }\n  }, {\n    key: \"emitCreateRequest\",\n    value: function emitCreateRequest() {\n      this.IO.emit('createRequest');\n    }\n  }, {\n    key: \"emitJoinRequest\",\n    value: function emitJoinRequest(myGameId, myPlayerName) {\n      this.IO.emit('joinRequest', {\n        gameId: myGameId,\n        playerName: myPlayerName\n      });\n    }\n  }, {\n    key: \"emitKeyboard\",\n    value: function emitKeyboard(keys) {\n      this.IO.emit('keyboard', {\n        keys: keys\n      });\n    }\n  }]);\n\n  return TagproSocket;\n}();\n\n\n\n//# sourceURL=webpack:///./lib/tagpro-socket.js?");

/***/ })

/******/ });