export default class MapBlueprint {
  constructor() {
    this.tsize = 40;
    this.barriers = [92, 53, 164, 56, 81, 168, 165, 1];

    this.level_one = {
      tsize: this.tsize,
      tiles: [53, 164, 164, 164, 164, 164, 164, 164, 164, 56,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 92,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 92,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 92,
        81, 78, 78, 78, 1, 78, 78, 78, 78, 92,
        81, 78, 78, 78, 78, 1, 78, 78, 78, 92,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 92,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 92,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 92,
        168, 164, 164, 164, 164, 164, 164, 164, 164, 165,
      ],
      barriers: this.barriers,
      columns: 10,
      rows: 10,
      blueFlagOptions: {
        color: 'blue', x: 75, y: 75, tsize: this.tsize,
      },
      redFlagOptions: {
        color: 'red', x: 325, y: 325, tsize: this.tsize,
      },
      bluePlayerOptions: {
        x: 110,
        y: 110,
        color: 'blue',
        controls: 'wasd',
        acceleration: 0.1,
      },
      redPlayerOptions: {
        x: 290,
        y: 290,
        color: 'red',
        controls: 'arrows',
        acceleration: 0.1,
      },
    };

    this.level_two = {
      tsize: this.tsize,
      tiles: [53, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 56,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        168, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 165,
      ],
      spikes: [{ x: 140, y: 140, tsize: this.tsize },
        { x: 140, y: 500, tsize: this.tsize },
        { x: 420, y: 140, tsize: this.tsize },
        { x: 420, y: 500, tsize: this.tsize },
        { x: 580, y: 140, tsize: this.tsize },
        { x: 580, y: 500, tsize: this.tsize },
        { x: 860, y: 140, tsize: this.tsize },
        { x: 860, y: 500, tsize: this.tsize },
      ],
      barriers: this.barriers,
      columns: 25,
      rows: 16,
      blueFlagOptions: {
        color: 'blue', x: 170, y: 320, tsize: this.tsize,
      },
      redFlagOptions: {
        color: 'red', x: 830, y: 320, tsize: this.tsize,
      },
      bluePlayerOptions: {
        x: 110, y: 320, color: 'blue', controls: 'wasd',
      },
      redPlayerOptions: {
        x: 890, y: 320, color: 'red', controls: 'arrows',
      },
    };

    this.level_three = {
      tsize: this.tsize,
      tiles: [53, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 56,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 1, 1, 1, 78, 78, 78, 1, 78, 78, 78, 1, 1, 1, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 1, 1, 1, 78, 78, 78, 1, 78, 78, 78, 1, 1, 1, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 1, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        81, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 81,
        168, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 165,
      ],
      spikes: [{
        x: 140, y: 140, tsize: this.tsize, moving: true, amplitude: 20,
      },
      {
        x: 140, y: 500, tsize: this.tsize, moving: true, amplitude: 20,
      },
      {
        x: 420, y: 140, tsize: this.tsize, moving: true,
      },
      {
        x: 420, y: 500, tsize: this.tsize, moving: true,
      },
      {
        x: 580, y: 140, tsize: this.tsize, moving: true,
      },
      {
        x: 580, y: 500, tsize: this.tsize, moving: true,
      },
      {
        x: 860, y: 140, tsize: this.tsize, moving: true, amplitude: 20,
      },
      {
        x: 860, y: 500, tsize: this.tsize, moving: true, amplitude: 20,
      },
      ],
      barriers: this.barriers,
      columns: 25,
      rows: 16,
      blueFlagOptions: {
        color: 'blue', x: 170, y: 320, tsize: this.tsize,
      },
      redFlagOptions: {
        color: 'red', x: 830, y: 320, tsize: this.tsize,
      },
      bluePlayerOptions: {
        x: 110, y: 320, color: 'blue', controls: 'wasd',
      },
      redPlayerOptions: {
        x: 890, y: 320, color: 'red', controls: 'arrows',
      },
    };
  }
}
