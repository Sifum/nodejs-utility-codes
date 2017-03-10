//console.dir()方法实现快速查看对象实例包含属性和方法
console.dir(123);
console.dir("abc");
console.dir(console);//查看node核心模块
console.dir({'abc': 123}); //查看JSON对象

//输出
// 123
// 'abc'
// Console {
//   log: [Function: bound ],
//   info: [Function: bound ],
//   warn: [Function: bound ],
//   error: [Function: bound ],
//   dir: [Function: bound ],
//   time: [Function: bound ],
//   timeEnd: [Function: bound ],
//   trace: [Function: bound trace],
//   assert: [Function: bound ],
//   Console: [Function: Console] }
// { abc: 123 }

