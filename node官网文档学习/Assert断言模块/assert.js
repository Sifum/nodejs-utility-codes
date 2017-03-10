//断言
var assert = require('assert');

assert(true);  // OK
assert(1);     // OK
assert(false);
  // throws "AssertionError: false == true"
assert(0);
  // throws "AssertionError: 0 == true"
assert(false, 'it\'s false');
  // throws "AssertionError: it's false"


  /*
assert(value[, message]);//如果value是假的，将抛出错误，否则程序继续。
*/
/*
assert.deepEqual(actual, expected[, message]);//actual和expected如果是“==”程序继续，否则抛出AssertionError:...
*/
/*
assert.deepStrictEqual(actual, expected[, message]);//采用“===”方式
*/
/*
assert.doesNotThrow(block[, error][, message]);//断言block方法不会抛出错误
*/
/*
assert.equal(actual, expected[, message]);//采用"=="方式
*/
/*
assert.fail(actual, expected, message, operator);//assert.fail(1, 2, undefined, '>');
  // AssertionError: 1 > 2

assert.fail(1, 2, 'whoops', '>');
  // AssertionError: whoops
*/
/*
assert.ifError(value);//如果为真抛出value
assert.ifError(0); // OK
assert.ifError(1); // Throws 1
assert.ifError('error') // Throws 'error'
*/
/*
assert.notDeepEqual(actual, expected[, message]);//与assert.deepEqual()相反
*/
/*
assert.notDeepStrictEqual(actual, expected[, message]);//与assert.deepStrictEqual()相反
*/
/*
assert.notEqual(actual, expected[, message]);//相当于“!=”
*/
/*
assert.notStrictEqual(actual, expected[, message]);//相当于'!==='
*/
/*
assert.ok(value[, message]);//断言value是否为true，否则抛出错误
*/
/*
assert.strictEqual(actual, expected[, message]);//相当于'==='方法
*/
/*
assert.throws(block[, error][, message]);//Expects the function block to throw an error. If specified, error can be a constructor, RegExp, or validation function.
*/
