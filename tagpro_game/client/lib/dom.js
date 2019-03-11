export default class Dom {
  static get buttons() {
    return document.querySelectorAll('button.start-button');
  }

  static get canvases() {
    return document.querySelectorAll('canvas.game-canvas');
  }

  static get progress() {
    return document.getElementById('progress');
  }

  static get joiner() {
    return document.querySelector('div.join-game-wrapper');
  }

  static get scoreBoard() {
    return document.getElementById('score-board-container');
  }

  static level(event) {
    return event.currentTarget.getAttribute('id');
  }

  static listenOn(element, type, fn) {
    element.addEventListener(type, fn);
  }

  static makeVisible(element) {
    element.style.visibility = 'visible';
  }

  static makeHidden(element) {
    element.style.visibility = 'hidden';
  }

  static display(element) {
    element.style.display = 'block';
  }

  static hide(element) {
    element.style.display = 'none';
  }

  static showMenu() {
    document.querySelector('div.start-menu').style.display = 'block';
    document.querySelectorAll('button.start-button').forEach(
      button => button.style.display = 'block',
    );
  }

  static hideMenu() {
    document.querySelector('div.start-menu').style.display = 'none';
  }

  static hideGame() {
    Array.from(Dom.canvases).forEach(canvas => Dom.hide(canvas));
    Dom.makeHidden(Dom.scoreBoard);
  }

  static showGame() {
    Array.from(Dom.canvases).forEach(canvas => Dom.display(canvas));
    Dom.makeVisible(Dom.scoreBoard);
  }

  static showProgress() {
    Dom.makeVisible(Dom.progress);
  }

  static hideProgress() {
    Dom.makeHidden(Dom.progress);
  }

  static showJoiner() {
    Dom.display(Dom.joiner);
  }

  static hideJoiner() {
    Dom.hide(Dom.joiner);
  }

  static updateMessage(text) {
    document.getElementById('message').innerText = text;
  }
}
