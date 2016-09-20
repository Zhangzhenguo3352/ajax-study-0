// createXHR 创建AJAX对象，兼容所有浏览器
function createXHR(){
  var xhr = null;
  var flag = true;
  ary = [
    function(){
      return new XMLHttpRequest;
    },
    function(){
      return new ActiveXObject("Microsoft.XMLHTTP")
    },
    function(){
      return new ActiveXObject("Msxml2.XMLHTML");
    },
    function(){
      return new ActiveXObject("Msxml3.XMLHTML")
    }
  ]
  for(var i=0;i<ary.length;i++){
    var curFn = ary[i];

    try{
      xhr = curFn()
      //->本次循环获取的方法执行没有出现错误：说明此方法是我想要的，下一次直接执行，这个小方法即可，
         // 这需要我们把createXMR 重写为小方法（完成后不需要再判断下面了，直接提出循环即可）
         createXHR = curFn;
         flag = true; // 说明 浏览器有 兼容上面的 方法
         break;  // 循环结束 就是找到了，所以结束本次循环
    }catch(e){
      //->本次循环获取的方法出现错误：继续执行下一次的循环
    }
  }
  if(!flag){// 如果 找了一遍 上面的都没有，浏览器都不支持
    throw new Error('你的浏览器，一定不支持ajax ,请更换浏览器')
  }
  return xhr;
}
