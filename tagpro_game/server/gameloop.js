// Taken and modified from https://github.com/timetocode/node-game-loop
// Thanks to https://github.com/norlin/node-gameloop for making this faster

let activeLoops = [];

const getLoopId = (function() {
  let staticLoopId = 0;

  return function() {
    return staticLoopId++;
  }
})();

function getNano() {
  var hrtime = process.hrtime();
  return (+hrtime[0]) * s2nano + (+hrtime[1]);
}

const s2nano = 1e9;
const nano2s = 1 / s2nano; // avoid a divide later, although maybe not nessecary
const ms2nano = 1e6;

/**
 * Create a game loop that will attempt to update at some target `tickLengthMs`.
 *
 * `tickLengthMs` defaults to 30fps (~33.33ms).
 *
 * Internally, the `gameLoop` function created has two mechanisms to update itself.
 * One for coarse-grained updates (with `setTimeout`) and one for fine-grained
 * updates (with `setImmediate`).
 *
 * On each tick, we set a target time for the next tick. We attempt to use the coarse-
 * grained "long wait" to get most of the way to our target tick time, then use the
 * fine-grained wait to wait the remaining time.
 */
module.exports.setGameLoop = function(update, render = () => {}, tickLengthMs = 1000 / 30, framerateMS = 1000 / 60) {
  let loopId = getLoopId();
  activeLoops.push(loopId);

  // expected tick length
  const tickLengthNano = tickLengthMs * ms2nano;
  const framerateNano = framerateMS * ms2nano;

  // We pick the floor of `tickLengthMs - 1` because the `setImmediate` below runs
  // around 16ms later and if our coarse-grained 'long wait' is too long, we tend
  // to miss our target framerate by a little bit
  const longwaitMs = Math.floor(framerateMS - 1);
  const longwaitNano = longwaitMs * ms2nano;

  let prev = getNano();
  let target = getNano();
  let lag = 0

  const gameLoop = function() {

    const now = getNano();

    lag += now - prev;

    prev = now;

    while(lag >= tickLengthNano){
      lag -= tickLengthNano;

      update();
    }

    if (now >= target) {
      target = now + framerateNano;

      render(lag / tickLengthNano);
    }

    // do not go on to renew loop if no longer active
    if (activeLoops.indexOf(loopId) === -1) {
      return;
    }

    // re-grab the current time in case we ran update and it took a long time
    const remainingInFrame = target - getNano();
    if (remainingInFrame > longwaitNano) {
      // unfortunately it seems our code/node leaks memory if setTimeout is
      // called with a value less than 16, so we give up our accuracy for
      // memory stability
      setTimeout(gameLoop, Math.max(longwaitMs, 16));
    } else {
      setImmediate(gameLoop);
    }
  }

  // begin the loop!
  gameLoop();

  return loopId;
};

module.exports.clearGameLoop = function(loopId) {
  // remove the loop id from the active loops
  activeLoops.splice(activeLoops.indexOf(loopId), 1);
};
