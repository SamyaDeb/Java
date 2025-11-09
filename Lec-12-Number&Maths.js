const score = 400
console.log(score);

const balance = new Number(123)
console.log(balance);

//Number Prototypes-
//1.Constructor-Refers to the Number constructor function that created the instance
let num = 49
console.log(num.constructor === Number);

//2.toExponential-Returns a string representing the number in exponential (scientific) notation
let anotherNum = 12345;
console.log(anotherNum.toExponential(4));     
console.log(anotherNum.toExponential(2));  

//3.toFixed-Returns a string representing the number with fixed-point notation (specific number of digits after the decimal
let Num = 5.6789;
console.log(Num.toFixed(2));  
console.log(Num.toFixed(0)); 

//4.toLocaleString([locales],[options]-Converts the number to a string formatted according to the current locale or specified locale.
let NewNum = 1234567.89;
console.log(NewNum.toLocaleString());
console.log(NewNum.toLocaleString("en-IN"));

//5.toPrecision-Returns a string representing the number with a specific number of significant digits
let AnotherNewNum = 123.456;
console.log(AnotherNewNum.toPrecision(4)); 
console.log(AnotherNewNum.toPrecision(2)); 

//6.toString-Converts the number to a string, optionally in a different base (radix)
let Another_num = 255;
console.log(Another_num.toString());     // "255"
console.log(Another_num.toString(2));    // "11111111" (binary)
console.log(Another_num.toString(16));   // "ff" (hexadecimal)
console.log(Another_num.toString());
console.log(Another_num.toString().length);

//7.valueOf()-Returns the primitive value of the number object (used internally by JS)
let numObj = new Number(42);
console.log(numObj.valueOf());


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

/* **************************--Maths--************************** */
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 14
const max = 27

console.log(Math.floor(Math.random() * (max - min + 1)) + min)