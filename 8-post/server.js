var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  if(req.url == '/'){
    fs.createReadStream('./post.html').pipe(res)
  }else if(req.url == '/post'){

    req.on('data',function(data){
      res.end(data)
    })
  }
}).listen(8081)
