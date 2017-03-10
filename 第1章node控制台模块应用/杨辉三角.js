//杨辉三角最本质的特征是，它的两条斜边都是由数字1组成的，而其余的数则是等于它肩上的两个数之和。
var i, j, k, strLine;
var readline = require('readline');
var rl = readline.createInterface(
    process.stdin,
    process.stdout
);

rl.question('line is: ', function(iLine){
    strLine = '>';
    for(i = 1; i <= 10*iLine; i++){
        if(i == 5*iLine){
            strLine = strLine + 1;
        }else{
            strLine = strLine + " ";
        }
    }
    console.info(strLine);

    strLine = '>';
    for(j = 1; j <= iLine-1; j++){
        for(k=1; k < 5*(iLine-j-1); k++){
            strLine = strLine + ' ';
        }
        y = 1;
        strLine = strLine + FormatNumber(y);
        for(k = 1; k<=j; k++){
            y = y*(j-k+1)/k;
            strLine = strLine + FormatNumber(y);
        }
        console.info(strLine);
        strLine = ">";
    }
    rl.close();
});

function FormatNumber(y){
    var strL = '';
    if(y < 10){
        strL = strL + "    " + y + "  ";
    }else if((y >= 10) && (y < 100)){
        strL = strL + "    " + y + "  ";
    }else if(y >= 100){
        strL = strL + "    " + y + "  ";
    }
    return strL;
}