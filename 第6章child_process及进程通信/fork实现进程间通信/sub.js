console.info('---child_process fork sub---');
console.info();

process.on('message', function(m){
    console.log('CHILD got message:', m);
});

process.send({sub:'main'});  //发送信息
console.info();