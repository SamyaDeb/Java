//THIS-Prints Current Context(value);if context change by (this.______) then value will be change

const user = {
    username : "Samya",
    price : 999,

    welcome_msg: function(){
        console.log(`Hello ${this.username},Welcome to JavaScript!`);
        console.log(this);
    }
}
user.welcome_msg()
user.username = "Akash"
user.welcome_msg()

console.log(this) //Gives {} in node environment;but in browser console it shows windows

function chai(){
    console.log(this); //THIS works in object
    console.log(this.username); //Undefined
}
chai()

const chaai = function(){
    let username = "Samya"
    console.log(this.username); //Undefined  
}
chaai()

//Arrow Function-
//Basic Syntax- () => {}
const chaaai = () => {
    let username = "Samya"
    console.log(this.username); //Undefined  
}
chaaai()

//Explicit Return-Return keyword khud se lagana par raha hai;
//If {} is used the we have to mention return
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(7,9));

//Implicit Return-Implicit return is only for single-expression functions
const AddTwo = (num1, num2) => num1 + num2;
/*Or- const AddTwo = (num1, num2) => (num1 + num2);*/ //Not Applicable With - {}

console.log(AddTwo(7, 9));

//Returning object through Implicit Return
const Name = () => ({username:"Samya"})
console.log(Name());
