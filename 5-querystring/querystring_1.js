var querystring = require('querystring');
var input = 'username==zhangzhenguo@@@password==123456';

console.log(querystring.parse(input,'@@@','=='))

//{ username: 'zhangzhenguo', password: '123456' }

// 它可以 跟参数  第一个 是把两个分开，第二个是 key  val 分开