console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
console.log(2<=1);

//When comparing a string and a number, JavaScript converts the string to a number.
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/* 
Reason-An Equality Check == And Comparison >,<,>=,<= Works Differently
Compoarisons convert null to a number,treating it as 0.Thats's Why,
No.3 null >= 0 is true And  
No.1 null > 0 is false
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === >=Strict Check 

console.log("2" === 2);
 