//改变应用程序目录process.chdir(path);path必须是完整路径
console.log('--Process chdir--');
console.info();
console.log('Currency directory: ' + process.cwd());
console.log('Change directory to: /home/king');
process.chdir('/home/king');
console.log('Currency directory: ' + process.cwd());
console.info();
console.log('--Process chdir--');