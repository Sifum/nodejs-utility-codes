console.info("---- node异步编程:异常捕获！-----");

//正确的方式
setTimeout(function(){
    try{
        var data = b / 0;
    }catch(e){
        console.log(e);
    }
}, 1000);

console.info();
