export default class Dom {
	get buttons() {
		return document.querySelectorAll("button.start-button")
	}

	get canvases() {
		return document.querySelectorAll("canvas.game-canvas")
	}

	get progress() {
		return document.getElementById("progress")
	}

	get joiner() {
		return document.querySelector("div.join-game-wrapper")
	}

	get scoreBoard() {
		return document.getElementById("score-board-container")
	}

	level(event) {
		return event.currentTarget.getAttribute("id")
	}

	listenOn(element, type, fn) {
		element.addEventListener(type, fn)
	}

	makeVisible(element) {
		element.style.visibility = "visible"
	}

	makeHidden(element) {
		element.style.visibility = "hidden"
	}

	display(element) {
		element.style.display = "block"
	}

	hide(element) {
		element.style.display = "none"
	}

	showMenu() {
		document.querySelector("div.start-menu").style.display = "block"
		document.querySelectorAll("button.start-button").forEach(
			button => button.style.display = "block")
		document.getElementById("progress").style.display = "flex"
	}

	hideMenu() {
		document.querySelector("div.start-menu").style.display = "none"
	}

	hideGame() {
		Array.from(this.canvases).forEach(canvas => this.hide(canvas))
		this.makeVisible(this.progress)
		this.makeHidden(this.scoreBoard)
	}

	showGame() {
		Array.from(this.canvases).forEach(canvas => this.display(canvas))
		this.makeHidden(this.progress)
		this.makeVisible(this.scoreBoard)
	}

	showJoiner() {
		this.display(this.joiner)
	}

	hideJoiner() {
		this.hide(this.joiner)
	}

	updateMessage(text) {
		document.getElementById("message").innerText = text;
	}

}

