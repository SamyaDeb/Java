let value = 3
let negValue = -value //Prints Neg Value

console.log(negValue);

console.log(2 + 2);//Addition
console.log(2 - 2);//Subtracrtion
console.log(2 * 2);//Multiplication
console.log(2 ** 4);//Power
console.log(4 / 2);//Division
console.log(8 % 3);//Remainder

//Strings Addition
let str1 = "Hello"
let str2 = " Samya" //In Strings each Space Counts

let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);//If Strings at first it considers each value as a string
console.log(2 + 2 + "1");//If Strings at last then it normally calculate then print the string beside the calculated value

console.log(+true);// o/p-1
console.log(+"");// o/p-False

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

num4 = num1 + num2 + num3
console.log(num4);

// Increment (++) operator

/*Postfix-If used postfix,with operator after operand (for example, x++), the increment operator increments 
          and returns the value before incrementing.*/

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);

/*Prefix-If used prefix,with operator before operand (for example, ++x), the increment operator increments 
         and returns the value after incrementing.*/

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);

