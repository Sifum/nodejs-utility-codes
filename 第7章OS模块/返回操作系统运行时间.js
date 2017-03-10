console.info('---OS uptime()---');
console.info();

var os = require('os');
var uptime = os.uptime();
console.info('操作系统已经运行了：' + uptime + 'seconds');
console.info();

var sTime = convertTime(uptime);
console.info('操作系统已经运行了：' + sTime);
console.info();

console.info('---OS uptime()---');

function convertTime(uptime){
    var runTime, hour, minute, second;
    hour = parseInt(uptime/3600);
    minute = parseInt((uptime - hour * 3600) / 60);
    second = uptime - hour * 3600 - minute *60;
    runTime = hour + ' hours' + minute + 'minute' + second + 'seconds.';
    return runTime;
}
/*
---OS uptime()---

操作系统已经运行了：9584.9543895seconds

操作系统已经运行了：2 hours39minute44.954389500000616seconds.

---OS uptime()---

 */