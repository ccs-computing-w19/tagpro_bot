export default class Spike {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.SpikeYTilePxl = 0;
    this.SpikeXTilePxl = 480;
    this.originY = options.y;
    this.tsize = options.tsize;
    this.moving = options.moving || false;
    this.amplitude = options.amplitude || 40;

    this.spikeImage = new Image();
    this.spikeImage.src = './lib/assets/tiles.png';
  }

  move(gameCounter) {
    if (this.moving) {
      this.y = this.originY
        + (this.amplitude * Math.sin(((gameCounter + this.x) % 360) * (Math.PI / 180)));
    }
  }

  draw(context) {
    context.drawImage(
      this.spikeImage,
      this.SpikeXTilePxl,
      this.SpikeYTilePxl,
      this.tsize,
      this.tsize,
      this.x - this.tsize / 2,
      this.y - this.tsize / 2,
      this.tsize,
      this.tsize,
    );
  }
}
