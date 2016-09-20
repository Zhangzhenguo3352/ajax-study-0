var http = require('http');
var fs = require('fs');


// 打开 9090 端口，用8080 端口访问

http.createServer(function(req,res){
  if(req.url == '/'){
    fs.createReadStream('./shera.html').pipe(res)
  }else if(req.url == '/ajax'){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.end('load('+JSON.stringify([{name:'zhang'},{name:'guo'}])+')')
  }
}).listen(9090)
