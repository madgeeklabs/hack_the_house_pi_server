var exec = require('child_process').exec;
var child = exec('explorenfc-basic');

child.stdout.on('data', function(data) {

	var lines = data.toString().split('\n');

    lines.forEach(function(line) {
    	if (line.indexOf('{') != -1){
    		console.log(line.substr(line.indexOf('{')));
    		var info = JSON.parse(line.substr(line.indexOf('{')));
    		console.log(info.type);
    	}
    });
});

child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});

child.on('close', function(code) {
    console.log('closing code: ' + code);
});