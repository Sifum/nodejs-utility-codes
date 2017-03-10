console.log('\n');
console.log('----Fibonacci数列应用----');
console.log('\n');

var strFibonacci;
var i = 1, j = 1, s = i + j;
strFibonacci = "输出Fibonacci数列 >>> 11\n";

while(s <= 1000){
    strFibonacci = strFibonacci + s + "\n";
    i = j;
    j = s;
    s = i +j;
}
console.info(strFibonacci);
console.info('\n');