console.log();
var obj = require('./obj.js');
var user = new obj('king', 26);
user.userinfo();
console.log(user.tag);
console.log();

/*
输出：
king is 26 years old
undefined
解读：
module.exports才是module模块的真正接口，而exports可以理解为它的一个副本。当module.exports对象通过赋值方法进行设定后，已经和exports对象指向的变量不同了，这时无论exports对象怎么修改，都已经和module.exports对象没关系了。
*/


