//引入文件模块，计算周长等
var circle = require('./circle.js');
console.info();
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please input radius:\t", function(answer){
    console.log("The radius is:\t", answer);
    console.log("The area of a circle of radius" + answer + " is " + circle.area(answer));
    console.log('The circumference of a circle of radius ' + answer + " is " + circle.circumference(answer));
    console.info();
    rl.close();
})