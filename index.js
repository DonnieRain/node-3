'use strict';

const http = require('http');
const port = 3000;
const fs = require('fs');
const index = fs.readFileSync('./index.html');


const requestHandler = (req, res) => {
	// res.write('Hello World ');
		
		// res.write(req.method);
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
		res.end(index);
		// console.log('Данные запроса: ', req);
};

const server  = http.createServer(requestHandler);
server.listen(port, (err) => {
	if(err) {
		return console.log('Error: ', err);
	};

	console.log('Listening ', port);
});