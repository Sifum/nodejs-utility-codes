//路径转化就是在原有url路径的基础上增加或替换标签的操作
console.info('--path parse()--');
console.info();

var url = require('url');

console.info(url.resolve('/one/two/three', 'four'));
console.info(url.resolve('/one/two/three/', 'four'));
console.info(url.resolve('http://www.example.com/one', 'two'));
console.info(url.resolve('http://www.example.com/one', '/two'));
console.info(url.resolve('http://www.example.com/one/', 'two'));
console.info(url.resolve('http://www.example.com/one/', '/two'));

/*
--path parse()--

/one/two/four
/one/two/three/four
http://www.example.com/two
http://www.example.com/two
http://www.example.com/one/two
http://www.example.com/two

 */