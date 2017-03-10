//console.log()和console.info()方法实际上是通过封装Process模块的stdout.write()方法来实现的。
console.info('--Process stdout--');
console.info();
console.log('Node.js Process Module - stdout method');
process.stdout.write('Node.js Process Module-stdout method');
console.info('\n');
console.info('console.log()方法封装了process.stdout.write()方法');
console.log = function(d){
    process.stdout.write('process.stdout.write:' + d +'\n');
}

console.log('Node.js Process Module-stdout method');
console.info('--Process stdout--');

/*
--Process stdout--

Node.js Process Module - stdout method
Node.js Process Module-stdout method

console.log()方法封装了process.stdout.write()方法
process.stdout.write:Node.js Process Module-stdout method
--Process stdout--
*/
