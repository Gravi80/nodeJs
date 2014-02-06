
/* we are making that object using myPowerConstructor */
/* easy way of making objects which can hide their stuffs*/

var otherMaker=function(){
	var names=['zero','one','two','three','four'];
	return function (number) {
		return names[number];
	};	
}();

/* STEP One */
/* Make an Object 
 => Object literal,new,Object.create,call another power constructor
*/
// var newObject = Object.create(oldObject) -> get something from oldObject
function myPowerConstructor (x) {
	var that = otherMaker(x); // create a new object which is put in that

	/* Step Two  
	some variables and functions */
	var secret = f(x); //private variable

	/* Step Three 
	create argument and Object with privileged methods
	*/

	that.priv = function(){
	 //	.... secret x that .....
	};

	/*STEp 4 return that */
	return that;
}


/* Clouser
 => a function object contains
  * A function (name,parameteres,body)
  * A refrence to the environment in which it was created(context)
*/


