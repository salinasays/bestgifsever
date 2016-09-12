var http = require ("http");
var fs = require ("fs");

var server = http.createServer(function (request, response){
	var url = request.url;
	// request.on('data', function(dataChunk){
	// 	console.log(dataChunk.toString());
	// })

if (url === '/'){
	fs.readFile('index.html', function(err, data){
		response.write(data.toString());
		response.end();
	})
} else if (url === '/main.css'){
	fs.readFile('main.css', function(err, data){
		response.write(data);
		response.end();
	})
} else if (url === '/page2') { 
	fs.readFile('page2.html', function(err, data){
		response.write(data.toString());
		response.end();
	})
} else if (url === '/page3') {
	fs.readFile('page3.html', function(err, data){
		response.write(data.toString());
		response.end();
	})
}
})



server.listen(3000);