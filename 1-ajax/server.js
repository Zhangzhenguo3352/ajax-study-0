var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	if(req.url == '/'){  // http://localhost:8081/
		fs.createReadStream('./index.html').pipe(res)
	}
}).listen(8081)