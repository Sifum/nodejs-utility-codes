console.info('---OS networkInterfaces()---');
console.info();

var os = require('os');
var networkInterfaces = os.networkInterfaces();
console.info(networkInterfaces);

console.info();
console.info('---OS networkInterfaces()---');

/*
---OS networkInterfaces()---

{ '本地连接':
   [ { address: 'fe80::582c:1a27:ceaf:ffe4',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: 'a4:ba:db:e2:61:d4',
       scopeid: 12,
       internal: false },
     { address: '192.168.1.104',
       netmask: '255.255.255.0',
       family: 'IPv4',
       mac: 'a4:ba:db:e2:61:d4',
       internal: false } ],
  'Loopback Pseudo-Interface 1':
   [ { address: '::1',
       netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
       family: 'IPv6',
       mac: '00:00:00:00:00:00',
       scopeid: 0,
       internal: true },
     { address: '127.0.0.1',
       netmask: '255.0.0.0',
       family: 'IPv4',
       mac: '00:00:00:00:00:00',
       internal: true } ] }

---OS networkInterfaces()---

 */