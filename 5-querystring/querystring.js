var querystring = require('querystring');
var input = 'username=zhangzhenguo&password=123456';

console.log(querystring.parse(input))
//{ username: 'zhangzhenguo', password: '123456' }
//它是转换 标准的 key  val 形式的