export default class Flag {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.color = options.color;
    this.flagImage = undefined;
    this.tsize = options.tsize;
    this.isCaptured = false;

    this.flagImage = new Image();
    this.flagImage.src = './lib/assets/tiles.png';
  }

  determineFlagYTilePxl() {
    if (this.isCaptured) {
      return 80;
    }
    return 40;
  }

  determineFlagXTilePxl() {
    if (this.color === 'blue') {
      return 600;
    }
    if (this.color === 'red') {
      return 560;
    }
    return -1;
  }

  draw(context) {
    context.drawImage(
      this.flagImage,
      this.determineFlagXTilePxl(),
      this.determineFlagYTilePxl(),
      this.tsize,
      this.tsize,
      this.x - this.tsize / 2,
      this.y - this.tsize / 2,
      this.tsize,
      this.tsize,
    );
  }
}
