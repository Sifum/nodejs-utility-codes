console.info("---- node异步编程:异常捕获！-----");

//错误方法
try{
    setTimeout(function(){
        var data = a/0;
    }, 1000);
}catch(e){
    console.log(e);
}

console.info();

/*输出：
---- node异步编程:异常捕获！-----

F:\demo\things\app.js:5
        var data = a/0;
                   ^

ReferenceError: a is not defined
    at null._onTimeout (F:\demo\things\app.js:5:20)
    at Timer.listOnTimeout (timers.js:92:15)
*/