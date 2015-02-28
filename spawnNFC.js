var exec = require('child_process').exec;
var child = exec('explorenfc-basic');

child.stdout.on('data', function(data) {
	console.log(data.substr(data.indexOf('{'), data.indexOf('}')));
    console.log('stdout: ' + data);
});

child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});

child.on('close', function(code) {
    console.log('closing code: ' + code);
});