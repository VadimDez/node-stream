/**
 * Created by Vadym on 10/10/15.
 */
var fs = require('fs');
var ws = fs.createWriteStream('message.txt');

ws.write('test 1 ');

setTimeout(function () {
    ws.end('test 2');
}, 1000);