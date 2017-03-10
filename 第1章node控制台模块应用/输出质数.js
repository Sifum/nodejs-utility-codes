//质数就是只能被1和其自身整除的整数。
var i, j, iNum, strPrimeNum;
var bFlag;
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter number?', function(iNum){
    strPrimeNum = " 2 ";
    for(i = 3; i <= iNum; i++){
        bFlag = true;
        for(j = 2; j < i; j++){
            if(i % j == 0){
                bFlag = false;
                break;
            }
        }
        if(bFlag == true){
            strPrimeNum = strPrimeNum + i + " ";
        }
    }
    console.log("Prime number >", strPrimeNum);
    rl.close();
})