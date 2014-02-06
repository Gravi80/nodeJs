var defaultNumberOfLines=10,filename = process.argv[2];
var fileSystem = require('fs'),readline = require('readline');
var exec = require('child_process').exec;

if(process.argv.length > 3){
	filename=process.argv[3]
	defaultNumberOfLines=process.argv[2]*-1;
}

var rd = readline.createInterface({
    input: fileSystem.createReadStream(filename),
    output: process.stdout,
    terminal: false
});
	
var lineCount;

exec('wc -l '+filename, function (error, results) {
    lineCount=results
    lineCount=lineCount.trim()
    lineCount = lineCount[0]+lineCount[1];
    lineCount=parseInt(lineCount,10)+1;
});
   
    // console.log(lineCount)

	var i=30-defaultNumberOfLines;
    // console.log(lineCount)
     
     console.log(i)
	rd.on('line', function(line) {
	if(i<){
	 console.log(line);						
	 i++;	
	}	
});
