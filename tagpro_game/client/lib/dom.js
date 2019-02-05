export default class Dom {
  get buttons() {
    return document.querySelectorAll("button.start-button")
  }

  get canvases() {
    return document.querySelectorAll("canvas.game-canvas")
  }

  showMenu() {
    document.querySelector('div.start-menu').style.display = 'block'
    document.querySelectorAll('button.start-button').forEach(
      button => button.style.display = 'block')
    document.getElementById('progress').style.display = 'flex'
  }

  hideMenu() {
    document.querySelector('div.start-menu').style.display = 'none'
  }

  get progress() {
    return document.getElementById('progress')
  }

  level(event) {
    return event.currentTarget.getAttribute("id")
  }

  listenOn(element, type, fn) {
    element.addEventListener(type, fn)
  }

  hide(element) {
    element.style.display = 'none'
  }

  hideProgress() {
    this.progress.style.visibility = 'hidden'
  }

  showProgress() {
    this.progress.style.visibility = 'visible'
  }

  makeVisible(element) {
    element.style.visibility = "visible"
  }

  display(element) {
    element.style.display = 'block'
  }

  hideGame() {
    Array.from(this.canvases).forEach(canvas => this.hide(canvas))
    this.showProgress()
  }

  showGame() {
    Array.from(this.canvases).forEach(canvas => this.display(canvas))
    this.hideProgress();
  }

  showJoiner() {
    this.display(document.querySelector('div.join-game-wrapper'))
  }

  hideJoiner() {
    this.hide(document.querySelector('div.join-game-wrapper'))
  }

  updateMessage(text) {
    document.getElementById('message').innerText = text;
  }

}

