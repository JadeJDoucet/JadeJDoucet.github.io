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
* Conditional statements will evaluate the truthiness of a given condition. This in done
* using boolean values. A conditional statment will always result in either TRUE or FALSE.
* The first statement, 'if' is the first condition to be evaluated, so there may only be ONE. If the result is false,
* the code continues to run. The next condition it will run into, will be an 'else if' statement. 
* This will also give a condition that must be met in order for the program to finish executing 
* this code. If this ELSE IF statement results in a false, then more else if conditions may be added, 
* or a final, or default action will take place when no conditions are met. 
* This final action is defined with 'else'. Since this is the FINAL ACTION to take place, there should only be
* ONE else inside of your control loop. Inside the body of your else statement, the else
* should return the final action that is needed for the code to finish running, so NO CONDITION 
* is needed for an else statement. 
* If no condition is met and no else statement is provided, nothing will be returned.
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