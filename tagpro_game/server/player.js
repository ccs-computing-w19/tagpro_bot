export default class Player {
	constructor(id, socket, map, keyboard, { x = 100, y = 100, radius = 20,
		color = 'blue', controls = 'arrows', acceleration = 0.1, name = 'someball'} = {}) {
		this.keyboard = keyboard

		this.id = id
		this.name = name
		this.spawnPosition = { x: x, y: y }
		this.x = x 
		this.y = y 
		this.dx = 0
		this.dy = 0
		this.radius = radius
		this.color = color
		this.controls = controls
		this.map = map
		this.hasFlag = false
		this.acceleration = acceleration
		this.frozen = false

	}

	accelerate(keys){
		let acceleration = this.acceleration
		if (!this.frozen) {
			if (keys.leftArrow) { this.dx-= acceleration }
			if (keys.upArrow) { this.dy-= acceleration }
			if (keys.rightArrow) { this.dx+= acceleration }
			if (keys.downArrow) { this.dy+= acceleration }
		}
	}

	decelerate() {
		let drag = 0.975
		this.dx *= drag
		this.dy *= drag
	}

	move(keys) {
		this.accelerate(keys)
		this.decelerate()
		this.x += this.dx
		this.y += this.dy
		this.wallCollision()
	}

	wallCollision() {
		let thetas = [...Array(72).keys()].map(x => x * 5 * (Math.PI / 180))
		let force = 0.1

		thetas.forEach(theta => {
			if (this.map.isWallCollision(this.x + (this.radius * Math.cos(theta)), this.y + (this.radius * Math.sin(theta)))) {
				this.dx -= force * Math.cos(theta)
				this.dy -= force * Math.sin(theta)
			}
		})
	}
}
