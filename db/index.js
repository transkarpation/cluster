function createConnection() {
	const mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/myapp', { useUnifiedTopology: true, useNewUrlParser: true });

	mongoose.set('debug', true);

	this.connection = mongoose.connection;

	mongoose.connection.on('connected', function() {
		console.log('connected to db')
		this.state = 'connected';
	});

	mongoose.connection.on('error', function(err) {
		this.state = 'disconnected';
	});

	mongoose.connection.on('disconnected', function() {
		this.state = 'disconnected';
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			this.state = 'disconnected';
			process.exit(0);
		});
	});

}

module.exports = createConnection;