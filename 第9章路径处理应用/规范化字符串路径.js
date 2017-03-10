//规划化字符串路径
console.info('---fs normalize()--');
console.info();

var path = require('path');
var path_a = '/txt///king';
console.info('path.normalize("txt///king") is:' + path.normalize(path_a));
console.info();

var path_b = '/txt//king/';
console.info('path.normalize("/txt//king/") is:' + path.normalize(path_b));

var path_c = '/txt///king//';
console.info('path.normalize("txt///king//") is:' + path.normalize(path_c));
console.info();

var path_d = '/txt///.king';
console.info('path.normalize("txt///.king") is:' + path.normalize(path_d));
console.info();

var path_e = '/txt///king/..';
console.info('path.normalize("txt///king/..") is:' + path.normalize(path_e));
console.info();

/*
---fs normalize()--

path.normalize("txt///king") is:\txt\king

path.normalize("/txt//king/") is:\txt\king\
path.normalize("txt///king//") is:\txt\king\

path.normalize("txt///.king") is:\txt\.king

path.normalize("txt///king/..") is:\txt

 */