//url参数转化url对象
console.info('--querystring parse()--');
console.info();

var url = require('url');
var querystring = require('querystring');

var queryUrl = 'http://localhost:6666/index?name=king&gender=male&level=high';
console.info('typeof queryUrl is:' + typeof url.parse(queryUrl));
console.info();
console.info('querystring.parse("queryUrl") is:');
var url_parse = url.parse(queryUrl).query;
//解析url字符串路径的操作
var querystring_parse = querystring.parse(url_parse);
//url参数转化为url对象的操作
console.info(querystring_parse);
console.info();

/*
--querystring parse()--

typeof queryUrl is:object

querystring.parse("queryUrl") is:
{ name: 'king', gender: 'male', level: 'high' }

 */