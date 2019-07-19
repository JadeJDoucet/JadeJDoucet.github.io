/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
/*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";



// 1. let and const //
let a = 'a';
const b = 'b';


    // 2. var //
/*
* reassignable: yes
* hoisted: yes
* scoped to functions: yes
* scoped to if blocks: no
* scoped to loop blocks: no
*/
/*
* let allows a mutable variable to be created
*/
    // 3. let //
/*
* reassignable: yes
* hoisted: no
* scoped to functions: yes
* scoped to if blocks: yes
* scoped to loop blocks: yes
*/

let string = "happy";
string = "sad"
console.log(string); // prints => 'sad'

    // 4. const //
/*
* reassignable: no
* hoisted:no
* scoped to functions: yes
* scoped to if blocks: yes
* scoped to loop blocks: yes
*/
/*
* const creates an immutable variable, one that can not be reassigned
*/

 const weather = 'sunny';
// if(weather === 'sunny') {
//     const message = 'nice day, eh?';
//  }
//console.log(message); // prints => ReferenceError: message is not defined

/* NOTE: this is because const is scoped within the if block, it's not accessible from outside the block
* this also goes for var and let
*/

const str = 'rainy';
// str = 'sunny';
// console.log(str); // prints => TypeError: Assignment to constant variable
 /* NOTE: this is because const cannot be reassigned
 */
 
 // 1. Hoisting //
 /* Hoisting is the bahaviour of moving varible declarations to the top */
 
 // 2. Example declarations //
 
 // console.log(dog); // prints => ReferenceError: dog is not defined
 /* a reference error is from dog not being defined in the code 
 */
 console.log(cat); // prints => undefined
 var cat = 'Oscar';
 /* undefined is printed to the console because 'var cat' is hoisted by the program, 
 * but the value is not hoisted, the variable is just known to exist by the program.
 *
 * if a variable is declared within a function, the var will be hoisted to the top of the function,
 * this will cause problems if that variable was previously declared outside of the function.
 */
// console.log(color); // prints => ReferenceError: color is not defined
// let color = 'blue'; // same result from const
 /* this is because let is not reassigned 'undefined' at the beginning of the program when hoisted,
 * it is still hoisted like var, just not in the same way
 */
 
x = 5; // Assigns 5 to x
console.log(x); // prints => 5 to the console
var x; // Declares x after the console log
/* the value of x is recognized before the console runs because Javascript also recognizes that the variable x is
* declared within the program before it is logged to the console. 5 was given to x instead of undefined, since it was called 
* at the top of the code
*/
 