console.log('\n');
console.log('-----汇率换算应用-----');
console.log('\n');
var obj = require('./obj.js');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter count: ", function(iMoney){
    console.info(iMoney + "US-Dollar exchange to RMB equals " + obj.dollar2rmb(iMoney));
    console.info(iMoney + "RMB exchange to US-Dollar equals " + obj.rmb2dollar(iMoney));
    console.info('\n');
    rl.close();
})



