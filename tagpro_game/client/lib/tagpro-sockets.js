let tagpro_socket = io.connect('http://localhost:4001');
tagpro_socket.on('playerJoined', function (data) {
	console.log(data.player);
	tagpro_socket.emit('playerResponse', {player: 'hi from client'});
});
