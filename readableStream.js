/**
 * Created by Vadym on 10/10/15.
 */
var Readable = require('stream').Readable;
var rs = new Readable;
rs.push('test');
rs.push('test test \n');
rs.push(null); // done outputting data

rs.pipe(process.stdout);