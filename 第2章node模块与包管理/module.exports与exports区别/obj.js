module.exports = function(name, age){
    this.name = name;
    this.age = age;
    this.userinfo = function(){
        console.log(this.name + " is " + this.age + " years old");
    };
};
exports.tag = function(){
    console.log('This is a tag function.');
}