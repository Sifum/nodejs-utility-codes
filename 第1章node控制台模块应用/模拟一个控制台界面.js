var readline = require('readline');
rl = readline.createInterface(
     process.stdin,
     process.stdout
);
rl.setPrompt('NodeJs>'); 
//此行模拟输出控制台的命令提示符rl.setPrompt(prompt, length); 
rl.prompt();
//此行模拟实现控制台，等待用户输入
rl.on('line', function(line){ //line事件来激发命令行输入功能
    switch(line.trim()){
        case 'name':
          console.log('King!');
          break;
        case 'code':
          console.log('Node.js!');
          break;
        case 'time':
          console.log('2015!');
          break;
        default:
          console.log('Say what?');
          break;
    }
    rl.prompt();
}).on('close', function(){
    console.log('Have a great day!');
    process.exit(0);
})
//ctrl+c结束，触发close事件