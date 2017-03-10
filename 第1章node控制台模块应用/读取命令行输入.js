//readline模块
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//readline.createInterface(options);可选参数:
//input(必须);output(必须);completer:用tab补全可选函数;terminal:true或false
rl.question('What is your name?', function(answer){
    console.log('My name is ', answer);
    rl.close();
})
rl.question('How old are you?', function(answer){
    console.log('I\'m', answer);
    rl.close();
})
//rl.question(query, callback);