/*Singleton-Literal se singleton nhi bante hai;
Constructor se jab banega tab singleton banta hai*/

// Object.create-Constructor Method Ke Through;iske andar singleton banta hai

//Object Literals

const mySym = Symbol("key1")
console.log(JSuser[mySym])
/*
About mySum-
Here’s how it works:
=>Created a Symbol named mySym.
=>Trying to access a property in the JsUser object using this Symbol as a key.
=>But,for this to work,must to first assign a property to that symbol key:
*/

const JSuser = {
    name: "Samya",
    age: 20,
    location: "WestBengal",
    email: "sammodeb28@gmail.com",    
    isLoggedIn: false,
    lastlogindays: ["Monday","Wednesday"]
}

console.log(JSuser.email);//Works when key is a valid identifier
console.log(JSuser["email"]);//Works always; needed for dynamic or special character keys
console.log(JSuser["name"])


JSuser.email = "hitesh@chatgpt.com"
Object.freeze(JSuser)//Fix the value so we can't cahnge in object
JSuser.email = "hitesh@microsoft.com"
console.log(JSuser);

JSuser.greeting = function(){
    return "Hello JS user";
}
console.log(JSuser.greeting());

JSuser.greetingTwo = function(){
    return `Hello JS user, ${this.name}`;
}
console.log(JSuser.greetingTwo());