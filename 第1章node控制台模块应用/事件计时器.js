//事件计时器
var n = 0;
console.time('10000 * 10000 - times');
//console.time()标记一个时间开始点，并带一个字符串参数
for(var i = 0; i < 10000; i++){
    for(var i = 0; i< 10000; i++){
        n++;
    }
}

console.timeEnd('10000 * 10000 - times');
//console.timeEnd()标记一个时间结束点并将记录值进行输出（ms为单位），并带有一个字符串参数
console.info(n);

//注：这两个方法的两个字符串参数值必须相同，才能确保正确计算