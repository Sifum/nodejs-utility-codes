var counter = require('./obj.js');
console.log('第一次调用模块[obj.js]');
counter.seOutputVal(10);  //设置从10开始计数
counter.setIncrement(20);  //设置增量20
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();

/*
require()多次调用同一模块不会重复加载
 */
var counter = require('./obj.js');
console.log('第二次调用模块[obj.js]');
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();

console.log('自动清零操作');
counter.autoSetZero();