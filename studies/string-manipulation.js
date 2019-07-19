/*
* STRING MANIPULATION:
*
* 0. String Manipulation is a way of changing and editting your strings as you code,
* without needing to create a new string or assigning a new string entirely.
*
* 1. Accessing String Characters: 
* Characters in a string can be treated like an array of characters, meaning that they
* can be accessed using bracket notation. 
*/
var name = 'Jade';
console.log(name[0]); // prints => 'J'
/* You can access elements within a string without knowing the full length of the string, 
* this is done using the string.length method. 
*/
var fullName = 'Jade Doucet';
console.log(fullName[fullName.length-1]);

// 1. String Methods //
/* Some common string methods to manipulate strings are indexOf/lastIndexOf, 
* toUpperCase()/toLowerCase, slice(), split(), substr(), and substring().
*/

// 2. indexOf() and lastIndexOf() // 
/* indexOf() and lastIndexOf() are both used to retrieve the index of the given
* character within a string. indexOf() starts at the beginning of the string and searches
* for the first instance of that character.
* indexOfLast() is similar, but it starts from the end of the string and searches toward the beginning.
* indexOfLast() can be given the index of a point to start at within the string.
*/

console.log(fullName.indexOf('D')); // prints => 5 to the console
// indexOf() looks for the first case of 'D' within the string and logs the index
console.log(fullName.lastIndexOf('e')); // prints => 9 to the console
// The character 'e' shows of two times in this string, but the one closest to the
// end of the string will have their index revealed
console.log(fullName.toLowerCase().lastIndexOf('d')); // prints => 5 to the console
// There may be cases where the string may contain a different cased character, 
// to combat that, you can use toLowerCase() to change the entire string to lower case
// and just search for the lower cased character. 

// 3. toUpperCase() and toLowerCase() //
/* These methods simply convert the string to upper case or lower case */
 
 var notCamelCased = 'JaSoNS';
 notCamelCased.toUpperCase(); // will convert the string to 'JASONS'
 notCamelCased.toLowerCase(); // will convert the string to 'jasons'
 
 // 4. slice (start, stop) // 
 /* The slice() method returns selected elements within the string as an array. 
 * The two parameters for slice are start and stop. 
 * Start parameter is required, it tells where to begin extraction of the elements.
 * End parameter is optional, this tells where to stop the extraction, and does NOT INCLUDE this position
 */
 
 var basicName = 'John Smith';
 console.log(basicName.slice(0,1)); // prints => 'J'
 /* slice(0,1) starts at the zero index, and STOPS AT BUT DOES NOT INCLUDE the first index */
 console.log(basicName.slice(5, basicName.length)); // prints => 'Smith'
 console.log(basicName.slice(5, basicName.length -1)); // prints => 'Smit'
 console.log(basicName.slice(5, -1)); // prints => 'Smit'
/* This version prints 'Smit' because the LAST INDEX of the string is given as the ENDING parameter, 
 * so, the splice() stops AT the index of the last character, but DOES NOT include it.
 * Also, a negative parameter can be used on the end in place of basicName.length - 1, it's 
 * essentially the same in this case. 
 */
 
 // 5. substr(start, length) and substring(start, end) //
 /* substr() and substring() are both similar to slice. 
 * The difference is that substring() cannot accept a negative index, while
 * substr() has a second parameter that specifies the LENGTH of the extracted part, instead of the end
 * and substr() can also accept a negative length
 */
 
 console.log(basicName.substring(5, basicName.length)); // prints => 'Smith'
 // same outcome as slice
 console.log(basicName.substr(5, 5)); // prints => 'Smith'
 // the length parameter ensures that the current index and 4 more characters are accessed
 console.log(basicName.substr(5)); // prints => 'Smith'
 // with no length parameter, substr() prints the rest of the string from the start index
 // substring() will also do the same without it's end parameter
 console.log(basicName.substring(5, 2)); // prints => 'hn ' 
 // This form of substring() prints in reverse from the starting position, since
 // the ending position is behind the start, and the Start is not included since its not going forward
 console.log(basicName.substring(5, 6)); // prints => 'S'
 // only the starting index is printed
 
 // 6. join() and split() //
 /* split() will convert a string into an array, with a separator as it's argument.
 * Without a separator, the entire string will go into an array at the 0 index.
 * join() will convert an array into a string, this will concat an array into a string, 
 * separated by whatever is in the argument.
 */
 var pie = 'Pumpkin Spice';
 console.log(pie.split(" ")); // prints => ['Pumpkin', 'Spice']
 // this string was converted to an array
 console.log(pie.split(" ").join("-")); // prints => Pumpkin-Spice
 // this converts the string to an array, then back to a string, 
 // but separated by "-". 
 // If no separator is given in join(), the output will be 'Pumpkin,Spice'; 
 // the comma from the array will be placed between the originally separated parts

// 7. trim() // 
/* The trim() method can be used to remove white space from a string */
var str = "       Hello World!        ";
console.log(str.trim()); // prints => 'Hello World!'

// 8. replace() //
/* The replace method replaces a specified value, with another value in a string */
var stringOne = 'I am Jade';
console.log(stringOne.replace('Jade', 'happy')); // prints => 'I am happy' 
// 'Jade' gets replaced by 'happy' in the instance of the execution of replace.

// 9. charAt() and charCodeAt() // 
/* charAt() returns the character at a specified index of a string, 
* charCodeAt() returns the unicode of the character at the specified index of a string
*/
var firstName = 'Joe';
console.log(firstName.charAt(1)); // prints => '0'
console.log(firstName.charCodeAt(1)); // prints '111', the unicode for 'o'

// 10. Operators //
/* strings can also be manipulated operators such as '+' to concat and comparison operators
* which can be used to determine alphabetical order
*/
var theFullName = firstName + 'Johnson';
console.log(theFullName); // prints => 'JoeJohnson'
console.log('abc' > 'acb'); // prints => false because 'abc' is lower in alphabetical order, 
// and the unicode will be lower since 'a' is the lowest of the letters