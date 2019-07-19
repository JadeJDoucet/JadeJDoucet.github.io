/*
* FUNCTIONS:
*
* 0. Functions are a type of data which contain reusable code.
*
* 1. The two phases to using functions: First, we must declare/define the function. 
* Next, we can execute/call/invoke/apply a function by typing the function name
* and entering any arguments required by the function.
*/
 function functionName() {} //define a function
 functionName(); //call a function
/*
* 2. The difference between parameters and arguments passed to a function, is that
* parameters are set when declaring/defining your function. Place holders are set
* as your parameters, representing the arguments to be passed into the function.
* Arguments are the values placed inside the parenthesis when the function is called.
*/
function functionWithParameters(parameter, parameterTwo){}
functionWithParameters('argument1', 'argument2');
/*
* 3.Syntax for a named function:
*/
function funcName(parameter1, parameter2) {
    return parameter1 + parameter2;// returns => the sum of the two parameters
}
 funcName(2,2); // returns => 4
 //this is invoking a named function

/*
* 4. Functions may be assigned to variables for simplicity and to make your code
* look cleaner. 
*/
var sum = function(p1, p2) {
    return p1 + p2; // returns the sum of the two parameters
};
sum(1,2); // returns => 3
// this is a variable assigned to a function, called with two arguments

/*
* 5. Functions can optionally take inputs and optionally return a single value. We
* can specify inputs by changing the number of parameters required when defining the
* function. To change the outputs, you will change what is returned from the function 
* within the code body of the function.
*/
function withInputs(num1, num2){
    return num1 + num2; // returns the sum of the two parameters
} // this function takes arguments to concatenate them. 

function withoutInputs() {
    return 1 + 1; // returns 2
} // this function will always return 2

/*
* 6. Scope: Functions can see and modify variables within the parent or global scopes, 
* however the variables within the function cannot be changed from outside the function.
*/
var globalVar = 7; //Variable within the global scope that can be accessed
function addToGlobal() {
    var num = 3; //Variable within function that cannot be accessed from outside.
    return num + globalVar; // adding a parameter to global variable
}

/*
* 7. Closures: Functions form closures {} around the data that they house. If an object returned 
* from the function is held in memory somewhere, or referenced, that closure stays ALIVE, and 
* data can continue to exist in these closures!
*/


function printName() {
 var myName = 'Jade';//a local variable only accessable within the function (a closure)
  function logName() { // an inner function, this has access to the local variable within the parent
    console.log(myName); // logs to the console, the variable myName that is in the parent function
  }
  logName(); // printName calls the inner function before the function closes
}
printName();
