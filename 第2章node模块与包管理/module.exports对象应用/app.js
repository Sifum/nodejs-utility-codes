console.log();
var obj = require('./obj.js');
obj.on('ready', function(){
    console.log('module obj.js is ready');
    console.log();
})
//触发ready事件后输出module obj.js is ready