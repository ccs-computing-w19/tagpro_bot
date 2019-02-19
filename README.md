# Tagpro Bot

Tagpro Bot is an AI player for the online game multiplayer capture the flag game known as [Tagpro](http://tagpro-test.koalabeast.com/). The bot will be on a team of 4 and will work towards a victory for the its team using the various game mechanics. The bot is a userscript written in Javascript that users can install with the help of a browser plugin such as Greasemonkey (for Firefox) or Tampermonkey (for Chrome). The bot will use a neural network designed according to principles presented in a paper about [Neural Networks through
Augmenting Topologies(NEAT)](http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf).

## How to start the game

1. Clone the git repo to your computer.
2. cd to `tagpro_game/client` directory inside the project and run `npm run-script build`
3. To run, cd to `tagpro_game/server` and run `npx babel-node app.js`
4. Note the port number that gets printed to your terminal and you should be able to navigate to `localhost:<port>` or `<your local ip>:<port>` to play the game

## How to play the game

Instructions are provided in the game screen.
