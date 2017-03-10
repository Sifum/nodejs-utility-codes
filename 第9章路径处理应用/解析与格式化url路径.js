//解析与格式化url路径,url.parse()与url.format()为一组功能互逆的方法
console.info('--path parse()--');
console.info();

var url = require('url');
var queryUrl = 'http://localhost:6666/index?name=king&gender=male&level=hign';
console.info('typeof queryUrl is:' + typeof url.parse(queryUrl));
console.info();

console.info('url.parse("queryUrl") is:');
var url_parse = url.parse(queryUrl);
console.info(url_parse);
console.info();

console.info('url.format("url_parse") is:');
var url_format = url.format(url_parse);
console.info(url_format);
console.info();

/*
--path parse()--

typeof queryUrl is:object

url.parse("queryUrl") is:
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:6666',
  port: '6666',
  hostname: 'localhost',
  hash: null,
  search: '?name=king&gender=male&level=hign',
  query: 'name=king&gender=male&level=hign',
  pathname: '/index',
  path: '/index?name=king&gender=male&level=hign',
  href: 'http://localhost:6666/index?name=king&gender=male&level=hign' }

url.format("url_parse") is:
http://localhost:6666/index?name=king&gender=male&level=hign

 */