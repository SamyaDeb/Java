/*
JavaScript is dynamically typed.
>Don’t need to declare a variable’s type(like int, string, etc.)explicitly.
>The type is determined at runtime, based on the value assigned.
>Can change the type of a variable during execution.
*/

/*
Datatypes are divided into 2 categories in basis kis tarah se data 
ko memory me rakha jata hai aur access kiya jata hai.
1.Primitive
2.Non-Priemitive
*/

/*
Prmitive dataypes-7 Categories-(Call By Value)
1.String 
2.Number
3.Boolean
4.Null
5.undefined
6.Symbol
7.BigInt
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 90071992547409922

console.log(id === anotherId);//Output-False 

/*
Here it is Symbol(description)Even though both have the same description '123',JavaScript creates two distinct, unique symbols.
*/

console.log(score);
console.log(scoreValue);
console.log(isLoggedIn);
console.log(outsideTemp);
console.log(userEmail);
console.log(id);
console.log(bigNumber);

/*
Non-Prmitive Or Refernce datatype
1.Array
2.Objects
3.Functions
*/

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

//Typeof Objects is Object 
let user = {

}

// function expression
const myFunction = function() {
    console.log("Hello world");
};

// function call
myFunction();

console.log(typeof heros);
console.log(typeof myFunction);//Typeof Function Is Function Object

