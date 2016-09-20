var querystring = require('querystring');
var input = 'username==zhangzhenguo@@@password==123456';
var obj = querystring.parse(input,'@@@','==')
console.log(obj) // { username: 'zhangzhenguo', password: '123456' }
console.log(querystring.stringify(obj,'@@@','==')) // username==zhangzhenguo@@@password==123456 ,完爆了 在把它转回来
