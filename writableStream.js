/**
 * Created by Vadym on 10/10/15.
 */
var Writable = require('stream').Writable;
var ws = Writable();

ws._write  = function (chunk, enc, next) {
    console.dir(chunk);
    next();
};

process.stdin.pipe(ws);