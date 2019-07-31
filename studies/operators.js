/*
* OPERATORS:
*
* 0. Operators take action on values. They act on our data by assigning, comparing
* and including them in arithmetic operations. Operators are classes by what they 
* do and how many operands they require. Operands are the values that operators act
* on and act with. Unary operators work with only one value, binary with two values, 
* and ternary works with three values. 
* Types of Operators include: 
* Assignment, Comparison, Arithmetic, Logical, String, Conditional (ternary), and
* unery operators.
*
*/

// 1. Binary Comparison Operators //
/* Comparison operators compare two operands (values) and result in a Boolean value, true,
* or false.
* Comparison operators are Less Than(<), Greater Than(>), Less Than Or Equal To(<=), and
* Greater Than Or Equal To(>=).
*/

console.log(2 > 1); // prints => true
// checks if first operand is GREATER THAN the second, returns boolean

console.log(2 < 1); // prints => false
// checks if first operand is LESS THAN the second, returns boolean

console.log(2 <= 2); // prints => true
// checks if first operand is LESS THAN OR EQUAL TO second operand, returns boolean

console.log(2 >= 2); // prints => true
// checks if first operand is GREATER THAN OR EQUAL TO second operand, returns boolean

 
// 2. Strict Comparison Operators // 
/* Strict comparison operators account for both value and type. A boolean is returned
* from a strict comparison operator.
*/
console.log(2 === 2); // prints => true
console.log(2 === '2'); // prints false

// 3. Unary Operators //
/* Unary operators act on a single value */
var i = 1;
console.log(-i); // prints => -1
/* this makes the variable, which is equal to a value of 1, negative. */

console.log(typeof 1); // prints => 'number'
/* this returns the data type of the compared value into a string. */

console.log(!true); // prints => false
console.log(!false); // prints => true
/* the bang operator flips the truthiness of the value */

var name;
name = 'Jade';
console.log(name); // prints => 'Jade'
/* the assignment operator assigns the value */

// 4. Logical Operators //
/* Logical Operators can tell us how much or how little of our code needs to evaluate
* to true.
*/
console.log(1 <= 1 && 0 <= 0); // prints => true
/* The AND operator says that both conditions must be true, if they are not, it is false */

console.log(1 < 1 || 2 > 1); // prints => true
/* The OR operator says that one condition OR the other MUST be true, if neither are true,
* false is returned. If the first condition is true, the second is not considered.
*/
console.log(!false); // prints => true
var emptyString = "";
console.log(!emptyString); // prints => true
/* The BANG operator flips the truthiness, it is often used to check if a variable has a truthy value. */

console.log(!!-1); // prints => true
/* The DOUBLE BANG is two BANG operators together. This changes the value to boolean.
* If it was falsey (0, null, undefined, etc), it will be false, otherwise, it will be true. 
*/

// 5. Arithmetic Operators // 
/*  Arithmetic operators act on the operands and return a new value.
*
*/
console.log(1 + 1); // prints => 2
// adds the two operands

console.log(4 - 2); // prints => 2
// subtracts the second operand from the first

console.log(2 / 1); // prints => 2
// divides the first operand by the second

console.log(2 * 1); // prints => 2
// multiplies the operands

console.log(10 % 4); // prints => 2
// divides the first operand by the second and returns the remainder

// 6. String Operators //
/* Comparison Operators can be used on string values, as well as the concatenation operator (+).
* When you concatenate two strings, the two strings are joined together exactly as they are, 
* and a new string is returned with the two strings combined.
*/
console.log("Hello" + " World"); // prints => 'Hello World'
var eye = 'Eye ';
var spy = 'Spy';
var isFun = ' is fun!';
console.log(eye + spy + isFun); // prints => 'Eye Spy is Fun!'
/* This simply combined the variables, as is. */
console.log(eye += 'ball'); // prints => 'Eye ball'
/* '"Eye" + " " + "ball"' is printed to the console because the variable, eye, contains
* a space at the end
*/

// 7. Assignment Operators //
/* Assignment operators assign or bind a value to a variable or to another value*/

let index = 1;
//A basic assignment of the value of the number 1 to the variable 'index'

index += 2;
//This operator adds and reassigns the value on the left by the value on the right

index -=2;
//This operator subtracts and reassigns the value on the left by the value on the right

index++;
//This is similar to the += operator, but this operator will only increment by 1

index--; 
//This is similar to the -= operator, but this operator will only decrement by 1

index *= 1;
//This will multiply and reassign the value on the left by the value on the right

index /=1;
//This will divide and reassign the value on the left by the value on the right

index %=1; 
//This will reassign the value on the left to the remainder of the left value, 
// divided by the right value
