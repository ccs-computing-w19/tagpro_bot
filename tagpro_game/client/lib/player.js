export default class Player {
  constructor(id, map, { x = 100, y = 100, radius = 20,
                color = 'blue', controls = 'arrows', acceleration = 0.1 } = {}) {
    this.id = id;
    this.spawnPosition = { x: x, y: y }
    this.x = x
    this.y = y
    this.dx = 0
    this.dy = 0
    this.radius = radius
    this.color = color
    this.playerImg = this.loadPlayerImage()
    this.controls = controls
    this.map = map
    this.hasFlag = false
    this.acceleration = acceleration
    this.frozen = false
    this.lastSync = {} //stores player fields as keys and the server tick they were last updated
  }

  loadPlayerImage() {
    let playerImg = new Image()
    playerImg.src = './lib/assets/tiles.png'
    return playerImg
  }

  determinePlayerTilePxl() {
    if (this.color === 'blue') {
      return 600
    } else if (this.color === 'red') {
      return 560
    }
  }

  determineFlagTilePxl() {
    if (this.color === 'blue') {
      return 560
    } else if (this.color === 'red') {
      return 600
    }
  }

  draw(context) {
		if (this.frozen){
			context.globalAlpha = 0.5
		}
    context.drawImage(
        this.playerImg,
        this.determinePlayerTilePxl(),
        0,
        this.map.tsize,
        this.map.tsize,
        this.x - this.radius,
        this.y - this.radius,
        this.map.tsize,
        this.map.tsize
    )
		context.globalAlpha = 1.0
    if (this.hasFlag) {
      context.drawImage(
        this.playerImg,
        this.determineFlagTilePxl(),
        40,
        this.map.tsize,
        this.map.tsize,
        this.x,
        this.y - 50,
        this.map.tsize,
        this.map.tsize
      )
    }
  }
