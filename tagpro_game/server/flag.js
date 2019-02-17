export default class Flag {
  constructor(options) {
    this.x = options.x
    this.y = options.y
    this.color = options.color
    this.tsize = options.tsize
    this.isCaptured = false
  }

  determineFlagYTilePxl() {
    if (this.isCaptured) {
      return 80
    } else {
      return 40
    }
  }

  determineFlagXTilePxl() {
    if (this.color === 'blue') {
      return 600
    } else if (this.color === 'red') {
      return 560
    }
  }
}
