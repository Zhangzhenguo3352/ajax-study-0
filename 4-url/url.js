var url = require('url');
console.log(url.parse('http://zhzheguo:123@localhost:8081/login?username=zhang&passwor=123456#top',true))
// true  是否 将 query 上的 对象 转成 字符串


//  url.parse(xxx,true)  //添加 true 

 // query: { username: 'zhang', passwor: '123456' },


/*
========================================================
{
  protocol: 'http:', 协议
  slashes: true,    //  有没有 这两个杠
  auth: 'zhzheguo:123',  权限 用户名 密码
  host: 'localhost:8081', 主机
  port: '8081',   端口号
  hostname: 'localhost',  主机名
  hash: '#top',  哈希值
  search: '?username=zhang&passwor=123456', 查询字符串 ，多了一 ？ 号 ，
  query: 'username=zhang&passwor=123456',  查询字符串内容  ， 少一个 ？  号
  pathname: '/login',    路径 ，端口 ？ 中间部分
  path: '/login?username=zhang&passwor=123456', 
  href: 'http://zhzheguo:123@localhost:8081/login?username=zhang&passwor=123456#    整个参数值
top' }

*/



