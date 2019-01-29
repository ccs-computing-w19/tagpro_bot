export default class TagproSocket{
	constructor() {
	  this.IO = io.connect('http://localhost:4001');
	}
	initListeners(){

	}


}
let tagpro_socket = new TagproSocket();
tagpro_socket.IO.on('playerJoined', function (data) {
	console.log(data.player);
	tagpro_socket.IO.emit('playerResponse', {player: 'hi from client'});
});
