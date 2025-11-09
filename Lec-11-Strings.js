const name = "Samya"
const age = 20

console.log(`My name is ${name} and I m ${age} years old`);

/*
String Interpolation is the process of inserting variables or expressions into a string.
It allows you to construct strings dynamically. Different programming languages support 
string interpolation in different ways.
*/

const gameName = new String('SamyaDeb') 

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

console.log(gameName.split('-'));//Here spilits in the basis of "-"

const newString = gameName.substring(2,6)//Last Number Didn't Counts
console.log(newString);

const anotherString = gameName.slice(-6,8)//Counting from backward direction
console.log(anotherString);

const anotherNewString = "     Samya     "
console.log(anotherNewString);
console.log(anotherNewString.trim());//Removes The Spaces or Gaps

const url = "https://facebook.com/samya%20deb"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))


// [[Prototype]]-In JavaScript, every object (including strings, arrays, functions, etc.) has a prototype.
//               The prototype is another object that contains shared methods and properties.
// =>String Methods-These are functions you can call on string values.They are,

// 1.Basic Information Methods-
// =>length-Returns number of characters in the string
// =>constructor-Refers to the String() constructor function
// =>valueOf()-Returns the primitive string value

// 2.Character Access-
// =>charAt(index)-Gets character at position
   console.log(gameName.charAt(3))
// =>charCodeAt(index)-ASCII code
   console.log(gameName.charCodeAt(5))
// =>codePointAt(index)-Unicode value
   console.log(gameName.codePointAt(4))
// =>at(index)-Like charAt but supports negative indexing
   console.log(gameName.at(-2))

// 3.Searching and Checking-
// =>
// =>
// =>
// =>
// =>

// 4.Testing & Matching-
// =>
// =>
// =>
// =>

// 5.Manipulation Methods-
// =>
// =>
// =>
// =>
// =>

// 6.Trimming-
// =>
// =>
// =>

// 7.Replacing-
// =>
// =>

// 8.Changing Case-
// =>
// =>
// =>
// =>
// =>

// 9.HTML-Related(Old,Rarely Used)
// =>
// =>
// =>