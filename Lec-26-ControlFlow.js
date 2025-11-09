/*
const temp = 41

if(temp<50){
    console.log("Executed");
}
else{
    console.log("Not Executed");
}
*/
/*
let score = 200
if(score > 100){
    let power = "Fly";
    console.log(`User Power:${power}`);
}
*/
/*
Implicit Scope-Same Line me hi execution hoga

const balance = 1000
if (balance > 500) console.log(`Balance: ${balance}`);
*/
/*
Sitch Case:

let month = 3
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;

    default:
        console.log("Deafault")
        break;
}
Agar break statement na use karu to key value match hone ke 
baad sara ka sara code execute ho jayega except default
*/
/*
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
&&-All Conditions True Hoga To code execute hoga

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
||-One Condition True Hoga To code execute hoga
*/
/*
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
 */
/*
Truthy And Falsy Value:
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

falsy values- false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values- "0", 'false', " ", [], {}, function(){}

 if (userEmail.length === 0) {
     console.log("Array is empty");
 }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
*/
/*
// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = null ?? console.log("Page Not Found")

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//Terniary Operator-

condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
*/