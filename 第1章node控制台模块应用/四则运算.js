var a, b, sign, summary;
console.info('Calculate start!');

var readline = require('readline');
var rl = readline.createInterface(
    process.stdin,
    process.stdout
);
rl.setPrompt('Calculate> ');
rl.prompt();
a = Math.round(Math.random() * 100);
b = Math.round(Math.random() * 100);
sign = Math.round(Math.random() * 3);
summary = switchSign(a, b, sign);
rl.on('line', function(line){
    if(line.trim() == summary){
        console.info('answer is right!');
    } else {
        console.info("answer is error!The correct answer is "+ summary + ".");
    }
    rl.prompt();
    a = Math.round(Math.random() * 100);
    b = Math.round(Math.random() * 100);
    sign = Math.round(Math.random() * 3);
    summary = switchSign(a, b, sign);
}).on('close', function(){
    console.log('Calculate exits!');
    process.exit(0);
});

function switchSign(a, b, sign){
    var c;
    switch(sign){
        case 0:
          c = a + b;
          console.info(a + "+" + b + "=");
          break;
        case 1:
          c = a - b;
          console.info(a + "-" + b + "=");
          break;
        case 2:
          c = a * b;
          console.info(a + "*" + b + "=");
          break;
        default:
          c = a + b;
          console.info(a + "+" + b + "=");
          break;
    }
    return c;
}