//汉诺塔问题
var iCount = 0;
var strMoveStep = "";
var readline  = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("请输入汉诺塔问题的圆盘数目：\t", function(count){
    console.log("输入汉诺塔问题的圆盘数目为：\t", count);
    hanoi(count, "A", "B", "C");
    console.info("移动步骤如下：\t%s", strMoveStep);
    console.info("移动次数为：\t%s", iCount);
    rl.close();
});

function move(x, y){
    iCount++;
    strMoveStep += x + "->" + y + '\t';
}

function hanoi(m, a, b, c){
    if(m == 1){
        move(a, c);
    }else{
        hanoi(m-1, a, c, b);
        move(a, c);
        hanoi(m-1, b, a, c);
    }
}