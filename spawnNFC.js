var exec = require('child_process').exec;
var child = exec('explorenfc-basic');

child.stdout.on('data', function(data) {
	var info = JSON.parse(data.substr(data.indexOf('{'), data.indexOf('}')));
	console.log (info.type);
    console.log('stdout: ' + data);
});

child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});

child.on('close', function(code) {
    console.log('closing code: ' + code);
});