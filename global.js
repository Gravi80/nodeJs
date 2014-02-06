var names=['zero','one','two','three','four'];

var digit_name = function(number){
	return names[number];
};

console.log(digit_name(3));

/* problem with global variable is that it can conflict with other global variable of same name 
( n that global variable can be of some library)*/



/* You Can Avoid This Using Clouser */

var digit_name=function(){
	var names=['zero','one','two','three','four'];
	return function (number) {
		return names[number];
	};	
}();

console.log(digit_name(3));

