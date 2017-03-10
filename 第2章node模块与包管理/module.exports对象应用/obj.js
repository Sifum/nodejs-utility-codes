var EventEmitter = require('events').EventEmitter;
module.exports = new EventEmitter();

setTimeout(function(){
    module.exports.emit('ready');
},1000)
//设置事件触发