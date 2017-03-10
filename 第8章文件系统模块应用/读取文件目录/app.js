//文件系统模块提供了fs.readdir()与fs.readdirSync()完成读取文件目录
console.info('---fs readdirSync()--');
console.info();

var path = 'node_modules';
var fs = require('fs');
var files = fs.readdirSync(path);
console.info('read directory txt');
console.info(files);
console.log('fs.readdirSync() Done');

console.info();

/*
---fs readdirSync()--

read directory txt
[ '.bin',
  'async',
  'bignumber.js',
  'bson',
  'connect',
  'core-util-is',
  'debug',
  'ee-first',
  'es6-promise',
  'escape-html',
  'finalhandler',
  'inherits',
  'isarray',
  'mongodb',
  'mongodb-core',
  'ms',
  'mysql',
  'on-finished',
  'parseurl',
  'readable-stream',
  'require_optional',
  'resolve-from',
  'semver',
  'string_decoder',
  'unpipe',
  'utils-merge' ]
fs.readdirSync() Done

 */