/**
 * Created by Vadym on 10/10/15.
 */
var Stream = require('stream');
var stream = new Stream;
stream.readable = true;

var c = 64;
var interval = setInterval(function () {
    if (++c >= 91) {
        clearInterval(interval);
        stream.emit('end');
    } else {
        stream.emit('data', String.fromCharCode(c));
    }
}, 100);

stream.pipe(process.stdout);