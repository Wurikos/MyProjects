
function returnFirstArgument(a) {
  return a;
};
returnFirstArgument('Привет');

function sumWithDefaults(a, b=100) {
  return a+b ;
};

function returnFnResult(rest, a) {
  return rest(a);
}; 
  
function returnCounter(number = 0) {
  return function() {
	  return ++number
};
};
var f = returnCounter(10);
console.log(f());
console.log(f());
console.log(f());
function returnArgumentsArray() {
	var arr=[];
  
  for(var i = 0; i < arguments.length; i++) {
		arr.push(arguments[i])
	} return arr
};
console.log(returnArgumentsArray(1,2,3,4))

function sum(a,b) {
  return a+b;
};
var newSum = bindFunction(sum, 2, 4);
function bindFunction(a, b, c) {	
  return function() {
	  return a(b,c)
	};
};
console.log(newSum());

export {
    returnFirstArgument,
    sumWithDefaults,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
};
