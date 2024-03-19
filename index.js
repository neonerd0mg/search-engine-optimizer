const search_engine_optimizer = require('search-engine-optimizer');
const ecommerce_shopping_cart = require('ecommerce-shopping-cart');
const web3_react = require('web3-react');
const mongoose = require('mongoose');
const web3 = require('web3');
const bluebird = require('bluebird');

const os = require('os');
console.log('System uptime:', os.uptime(), 'seconds');

const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
readFile('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

const net = require('net');
const client = net.connect({ port: 8124 }, () => {
  console.log('Connected to server!');
  client.write('Hello, server! Love, Client.');
});

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

const assert = require('assert');
assert.notStrictEqual(1, '1', '1 should not be strictly equal to "1"');

const zlib = require('zlib');
const input = 'Compress me!';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log('Compressed data:', buffer.toString('base64'));
  }
});

const os = require('os');
console.log(`Total memory: ${os.totalmem()} bytes`);

const { Transform } = require('stream');
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTransform).pipe(process.stdout);

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('customEvent', (arg1, arg2) => {
  console.log('Custom event triggered:', arg1, arg2);
});
eventEmitter.emit('customEvent', 'Hello', 'World');

const dns = require('dns');
dns.lookup('www.google.com', (err, address, family) => {
  console.log('Address:', address);
  console.log('IP version:', family);
});