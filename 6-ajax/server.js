var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

	req.setEncoding('utf8')
	if(req.url == '/'){
		fs.createReadStream('./send.html').pipe(res)
		
	}else if(req.url == '/ajax'){  // 我发送的是 /ajax  的数据
		// 这样写不规范，为什么可以显现出来，因为它可以支持到  64k,这才5个 字节
		req.on('data',function(data){ // 接受到post数据 
			res.end(data) // 返回给 客户端 ，客户端 接受的数据
		})
	}
}).listen(8081)