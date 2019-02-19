export default class Keyboard {
  constructor() {
    this.keys = {
      "leftArrow": false,
      "upArrow": false,
      "rightArrow": false,
      "downArrow": false,
    }
  }

  updateKeys(thisKeys) {
    for(const key in thisKeys){
      this.keys[key] = thisKeys[key]
    }
  }

}
