var http = require('http'); //載入http module

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World');
	response.end();
 }).listen(3000);

//

// open cmd 
// cd C:\Users\Mocca Yang\Desktop\NodeJs
// node server.js
// goto 127.0.0.1:3000 