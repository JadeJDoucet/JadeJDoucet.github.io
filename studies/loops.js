/*
* LOOPS:
* 
* 0. Loops are used to iterate over data, or repeat something.
* This is useful when needing to go through data to find specific items within the data
* structure.
*/

// 1. For, While, For In Loops // 

/* For Loops */
var array = [1, 2, 3, 4, 5]; // Array variable to loop/iterate through
for (let i = 0; i <= array.length -1; i++) { 
    console.log(array[i]); // prints => 1                              
}                                   //  2
                                    //  3
                                    //  4
                                    //  5
    // The values are printed individually as the program executes 5 times
    
/* Firstly, the for keyword tells the program that this is a for loop. Next, a condition
* is made. A variable, i, is created. Then the comparison is made, if i is less than or 
* equal to the length of the array - 1(the last element in the array), then i will 
* increment by 1(i++). Since the variable, i, is set to 0, the loop will start at 
* the zeroeth index of the array, and because the stopping condition evaluates to true,
* as long as i is less than or equal to the last element in the array, the loop will continue
* to add +=1 to i. The loop stops when the condition evaluates to false.
*/

// NOTE: for loops can also iterate over an array in REVERSE, to do this:
for (let i = array.length -1; i >= 0; i--) {
    console.log(array[i]); // prints => 5
}                                   //  4
                                    //  3
                                    //  2
                                    //  1
    // The values are printed individually as the loop executes to the zeroeth index
/* The iterator variable created 'i', is assigned to the last element of the array (array.length -1)
* and the stopping condition is set to loop until the loop reaches the zero index of the array.
* Then, the decrement (i--) will take place to change your iterator.
*/

/* While Loops */
var x = 2;
while (x < 5) {
    console.log('Loops are fun'); // prints => 'Loops are fun'
    x++;                                    // 'Loops are fun'
}                                           // 'Loops are fun'
    // The console.log is executed 3 times and prints 3 times
/* The keyword 'while' tells the program that this is a while loop. After the while keyword,
* the stopping condition is in parenthesis (). When the stopping condition returns as false,
* the loop stops. Inside the body of the loop, you MUST HAVE AN INCREMENT. If no increment is 
* inside the body, the loop will run inifinitely and the program will crash.
* Before the Increment, you typically have your action to be performed upon each iteration. 
*/

/* For In Loops */
var object = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};
for (var key in object) {
    console.log(object[key]); // prints => value1 (then value2, value 3)
    // this console logs the values inside the object
    console.log(key); // prints => key1 (then key2, key3)
    // this console logs the keys in the object
}
/* The for keyword communicates that this will be a loop, then inside of parenthesis, 
* a stopping condition is made. Inside the parenthesis, a variable of 'key' is made to
* represent the keys within the object to loop through, then the 'in' key word tells 
* the program to loop through the given object name, the object name in this case was 'object'.
* The loop will run through the object, and will iterate for each key within the object.
* The variable inside the parenthesis will be associated with the keys in the object by the program.
*/