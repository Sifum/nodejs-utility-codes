console.info('---child_process fib main---');
console.info();

var cp = require('child_process');
var child = cp.fork('sub.js');

child.on('message', function(m){
    console.info('斐波那契数列:' + m.result + '\n');
});

var input = parseInt('10');
child.send({input: 1 });
for(var i = 1;i < input; i++){
    child.send({input: i});
}
console.info();

/*
---child_process fib main---


---child_process fork sub---

斐波那契数列:1

斐波那契数列:1

斐波那契数列:2

斐波那契数列:3

斐波那契数列:5

斐波那契数列:8

斐波那契数列:13

斐波那契数列:21

斐波那契数列:34

斐波那契数列:55

 */