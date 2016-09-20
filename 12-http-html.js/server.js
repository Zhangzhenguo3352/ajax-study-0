var http = require('http');

http.get('http://baijia.baidu.com/',function(req,res){
  var result = '';
  req.on('data',function(data){
    result +=data.toString();
  })
  req.on('end',function(){
    console.log(result)
  })

}).on('error',function(e){
  console.log('错误'+e)
})


//通过 node 向 网页发起一个请求，然后 得到一个响应
