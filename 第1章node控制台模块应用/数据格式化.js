//字符串格式化
console.log('%s', "This is minson");
console.log('%s %s', "This is minson", "you are wana");

//数值型格式化
console.log('%d', 8.8);
console.log("%d-%d", 8.8, 8.0);

//JSON数据格式化
console.log('%j', {OS: 'win', Version: '7.1', Language: ['English', 'Chinese'] }); 
var v_json = {
    OS: 'win',
    Version: '7.1',
    Language: ['English', 'Chinese']
}
console.log('%j', v_json);

//特殊格式化，输出%8d 8
console.log('%8d', 8);