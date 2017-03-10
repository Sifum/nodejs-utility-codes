console.info('---OS cpus()---');
console.info();

var os = require('os');
var cpus = os.cpus();
console.info(cpus);

console.info();
console.info('---OS cpus()---');

/*
---OS cpus()---

[ { model: 'Pentium(R) Dual-Core  CPU      E5800  @ 3.20GHz',
    speed: 3192,
    times: { user: 3725194, nice: 0, sys: 1221565, idle: 5296015, irq: 24710 } }
,
  { model: 'Pentium(R) Dual-Core  CPU      E5800  @ 3.20GHz',
    speed: 3192,
    times: { user: 3228175, nice: 0, sys: 1016018, idle: 5997520, irq: 25630 } }
 ]

---OS cpus()---
 */