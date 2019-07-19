/*
*DATA TYPES
*
* 0. Data types are how we categorize different types of data in javascript
* many have similar and shared properties between them
*
* 1. Primitive/Simple data types are the most basic data types. They do not hold or
* collect other data, and when operations on primitive/simple data types are run,
* they return new simple/primitive values without altering the original. These 
* data types are also copied by value, from one variable to the next.
* Included in Simple data types are Numbers, Strings, Booleans, NaN(no active number), 
* undefined, null, Infinity, and -Infinity.
* 
* 2. Complex data types are formed by combining other values and are of indefinite
* size. These data types copy by reference, meaning that when they are assigned or
* passed, they are referred to. 
* Included in complex data types are Objects, Arrays, and Functions. 
*
* 3. Primitive vs Complex data types:
* Summarized, primitive data is a value that is copied and Complex data is a reference.
* By Copy values are copies of the exact value being passed, whereas By Reference to a complex
* data type is referring to values or elements stored inside the complex data type. 
*/

// Primitive/Simple Data Types //

// 1. Number : Numeric data //
var number = 1;

// 2. String : Character data //
var string = 'string';

// 3. Boolean : true or false //
var bool = true;

// 4. NaN : Not a Number - Belongs to the Number data type //
typeof NaN; // prints => 'number'

// 5. undefined : no-value, uninitialized  //
undefined
var undefinedEx;
console.log(undefinedEx) // prints => undefined

// 6. null : no-value, nullified by a programmer //
var num = null;
console.log(num); // prints => null

// 7. Infinity and -Infinity : represents Infinity, a value greater or lesser than any value // 
console.log(Infinity); // prints => Infinity


// Complex Data Types //

// 1. Object // 
var objectLiteral = {}; // creates an Object Literal
/* Within the curly braces of an object literal, key-value pairs are stored as 
* properties within the object.
* These properties can be accessed using dot notation or bracket notation, and 
* can be manipulated the same way. 
*/
objectLiteral.key = 'value'
console.log(objectLiteral.key); // prints => 'value' to console
console.log(objectLiteral); // prints => { key: 'value' }

// 2. Array // 
var arrayLiteral = []; // creates an Array Literal
/* Within the square brackets of an Array Literal, elements are stored. Multiple 
* elements can be stored within an array, separated with a comma ",". 
* Arrays may be manipulated using methods such as .pop(), .push(), .shift(), and .unshift().
* You may also reference to index numbers of an array to access an element. Remember
* that array index starts at 0.
*/
arrayLiteral.push(1, 2, 3);
console.log(arrayLiteral); // prints => [1, 2, 3]
console.log(arrayLiteral[0]); // prints => [1]

// 3. Function //
function functionName(parameter) {
    return true; // function body
};
/* Functions are a type of data containing reusable code. With this reusable block of code,
* we are able to insert simple functions into other functions to make the code look 'cleaner'.
*/
function isItTrue() {
    if (functionName()) {
        return true;
    }
};
console.log(isItTrue()); // prints => true
        // There are two phases to creating a function: //
/* 1. Function Declaration/Definition : Creating the Function */
/* 2. Invocation/Calling/Executing/Applying : using the Function */

