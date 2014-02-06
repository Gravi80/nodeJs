var defaultNumberOfLines=10,filename = process.argv[2];
var fileSystem = require('fs'),readline = require('readline');

if(process.argv.length > 3){
	filename=process.argv[3]
	defaultNumberOfLines=process.argv[2]*-1;
}

var rd = readline.createInterface({
    input: fileSystem.createReadStream(filename),
    output: process.stdout,
    terminal: false
});
	
	var i=1;
	rd.on('line', function(line) {
	if(i<=defaultNumberOfLines){
	 console.log(line);						
	 i++;	
	}	
});








