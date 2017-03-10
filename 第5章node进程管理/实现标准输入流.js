console.info('---Process stdin---');
console.info();
console.info('用户输入数据');

process.stdin.setEncoding('utf8'); //设定输入流编码
process.stdin.on('readable', function(){ //为process.stdin对象注册readable事件
    var chunk = process.stdin.read(); //读入用户在控制台终端的输入信息
    if(chunk !== null){
        process.stdout.write('Print Data:' + chunk + '\n');
    }
});

process.stdin.on('end', function(){
    process.stdout.write('end.\n');
});
console.info();
console.info('---Process stdin---');


/*
---Process stdin---

用户输入数据

---Process stdin---
dfnef
Print Data:dfnef

dfne
Print Data:dfne
*/
