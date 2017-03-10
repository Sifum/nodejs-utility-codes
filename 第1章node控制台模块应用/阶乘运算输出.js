console.log('\n');
console.log('--阶乘计算--');
console.info('\n');

var iNum, iFactorial = 1;
var strFactorial;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("请输入阶乘运算起始数值：", function(iNum){
    strFactorial = iNum + "!=" + factorial(iNum);
    console.info(strFactorial);
    console.info('\n');
    rl.close();
});

function factorial(n){
    if(n > 0){
        if(n == 1){
            iFactorial = 1;
        }else{
            iFactorial = n * factorial(n-1);
        }
    }
    return iFactorial;
}
