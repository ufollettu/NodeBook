var os = require('os');
var gigaByte = 1 / (Math.pow(1024, 3));
console.log('Total Memory', os.totalmem() * gigaByte, 'GBs');
console.log('Available Memory', os.freemem() * gigaByte, 'GBs');
console.log('Percent consumed', 100 * (1 - os.freemem() / os.totalmem()));
console.log('This machine has', os.cpus().length, 'CPUs');
var util = require('util');
var name = 'nate';
var money = 33;
// prints: nate has 33 dollars
console.log(util.format('%s has %d dollars', name, money));
