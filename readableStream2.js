/**
 * Created by Vadym on 10/10/15.
 */
process.stdin.on('readable', function () {
    var buf = process.stdin.read(3);
    console.dir(buf);
});