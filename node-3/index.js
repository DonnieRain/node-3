'use strict';

const http = require('http');
const port = 3000;
const fs = require('fs');
const index = fs.readFileSync('./index.html');
const request = require('request');
let url = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3`;

const requestHandler = (req, res) => {
	// res.write('Hello World ');
	// res.write(req.method);
	// console.log('Данные запроса: ', req);

	request(url, function(err,response,data) {
		if(!err) {
			res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
			res.write(data);
			res.end(index);
			// console.log(data);
		}else {
			console.log(err);
		}
	})	
}

const server  = http.createServer(requestHandler);
server.listen(port, (err) => {
	if(err) {
		return console.log('Error: ', err);
	};

	console.log('Listening ', port);
});