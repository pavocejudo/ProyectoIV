var plan = require('flightplan');

var appName = "gAcademy";

plan.target('despliegue', [
 {
	host: '174.138.2.199',
	username: 'root',
	agent: process.env.SSH_AUTH_SOCK
}]);

plan.remote(['install'],function(remote){
	remote.log('Installing dependecies');
	remote.with('cd ~/proyecto/', function(){
		remote.exec('npm install');

	});
});

plan.remote(['exec'], function(remote){
	remote.log('Executing server...');
	remote.with('cd ~/proyecto/', function(){
		remote.exec('node src/app.js');
	});
});
