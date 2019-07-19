/*
* CONTROL FLOW:
*
* 0. Controlling the flow of an application is done by Conditional Statements. 
*
* 1. Conditional Statements: 
* Conditional statements are if, else if, else, and switch. 
* With conditional statements, we are able to make decisions within our code.
* IF this statement is true, do this, ELSE IF this one is true, do this, ELSE, do this if 
* none of the others are true
* Conditional statements will evaluate the truthiness of a given condition
*/
if (true === !true) {
    console.log('That\'s not right');
    // this will not run because true is not equal to not true
} else if (false === !true) {
    console.log('That\'s more like it');
    // this will run because false is equal to not true
} else {
    console.log('This line of code should not run');
    // this code will not be run because this else if statement is true
}

// 2. Switch Statements //
/* Typically, if else statements will do the job, but in some cases, a switch statement
* will get the job done in a cleaner manner.
* A switch statement compares an input expression value to cases within the statement. 
* If a case is matched to the value, the corresponding output will take place and
* after the code executes, it is typically followed by a break; to prevent the application
* from continuing to run through the code.
*/
var number = 5;
switch (number) {
    case 1:
    case 2: 
    case 3:
        console.log('This number is less than 4');
        break;
    case 4:
    case 5:
    case 6:
        console.log('This number is greater than 3, but less than 7');
        break;
    default:
        console.log('This number is too big');
}
// NOTE: The code will run completely through to the DEFAULT statement if no condition is met,
// or if no break; is reached before the default statement