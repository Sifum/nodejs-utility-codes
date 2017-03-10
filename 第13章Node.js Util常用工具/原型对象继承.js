//注意util.inherits()实现继承时，基类构造函数内部创建的属性和方法均不会被子类所继承，只有通过原型方法创建的属性和方法才会被子类继承。
console.log('----util inherits()---');
console.info();

var util = require('util');

/*
定义原型基类
 */
function Base(){
    this.name = 'base';
    this.year = 2015;
    this.sayHello = function(){
        console.log('Hello '+this.name+':'+'this is '+this.year+'.');
    };
}
/*
定义基类的方法
 */
Base.prototype.showName = function(){
    console.log(this.name);
}
Base.prototype.showYear = function(){
    console.log(this.year);
}

/*
定义子类
 */
function Child(){
    this.name = 'child';
}


//实现继承util.inherits(constructor, superConstructor);
util.inherits(Child, Base);

var objChild = new Child();
objChild.showName();
objChild.showYear();
console.log(objChild);

/*
----util inherits()---

child
undefined
Child { name: 'child' }

 */