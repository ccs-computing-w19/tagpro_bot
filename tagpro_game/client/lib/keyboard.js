export default class Keyboard {
	constructor(tagpro_socket) {
		this.tagpro_socket = tagpro_socket
		this.keys = {
			"leftArrow": false,
			"upArrow": false,
			"rightArrow": false,
			"downArrow": false,
		}
	}


	listenForEvents() {
		window.addEventListener('keydown', this.onKeyDown.bind(this))
		window.addEventListener('keyup', this.onKeyUp.bind(this))
		return this
	}

	isKeyPressed() {
		let flag = false
		for (let prop in this.keys) {
			if (this.keys[prop]) {
				flag = true
			}
		}
		return flag
	}

	onKeyDown(event){

		let that = this.keys
		switch (event.keyCode) {
			case 37:
				that.leftArrow = true
				event.preventDefault()
				break
			case 38:
				that.upArrow = true
				event.preventDefault()
				break
			case 39:
				that.rightArrow = true
				event.preventDefault()
				break
			case 40:
				that.downArrow = true
				event.preventDefault()
				break
		}

		this.tagpro_socket.emitKeyboard(that) 

	}

	onKeyUp(event){

		let that = this.keys
		switch (event.keyCode) {
			case 37:
				that.leftArrow = false
				event.preventDefault()
				break
			case 38:
				that.upArrow = false
				event.preventDefault()
				break
			case 39:
				that.rightArrow = false
				event.preventDefault()
				break
			case 40:
				that.downArrow = false
				event.preventDefault()
				break
		}

		this.tagpro_socket.emitKeyboard(that) 

	}
}
