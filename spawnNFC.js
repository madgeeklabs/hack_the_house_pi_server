var exec = require('exec-queue');
while(1){
  exec('explorenfc-basic', function (err, stdout, stderr) {
    console.log(stdout);
  });
}