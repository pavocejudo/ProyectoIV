var plan = require('flightplan');

plan.target('despliegue', [
 	{
		host: '174.138.2.199',
		username: 'root',
		agent: process.env.SSH_AUTH_SOCK
	}
	]
);

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

plan.remote(['stop'], function(remote){
	remote.log('Stopping server...');
	remote.with('cd ~/proyecto/', function(){
		remote.exec('pkill -f "node src/app.js"');
	})
})