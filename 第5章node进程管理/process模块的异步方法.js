//process.nextTick()与setTimeout()类似，用于完成异步操作，但前者效率更高
console.info('---Process nextTick---');
console.info();
console.time('startB');
console.log('start - setTimeout');

setTimeout(function(){
    console.log('nextTick callback 2');
}, 0);
console.log('scheduled - setTimeout');
console.timeEnd('startB');

console.time('startA');
console.log('start - nextTick');
process.nextTick(function(){
    console.log('nextTick callback 1');
});
console.log('scheduled - nextTick');
console.timeEnd('startA');
console.info();
console.info('---Process nextTick---');

/*
---Process nextTick---

start - setTimeout
scheduled - setTimeout
startB: 2.483ms
start - nextTick
scheduled - nextTick
startA: 0.299ms

---Process nextTick---
nextTick callback 1
nextTick callback 2
*/