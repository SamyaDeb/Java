//Two Types Of Memory-

// 1.Stack-Used in Premitive(Gives a copy)
let myname = "Samya"
let anothername = myname
anothername ="Akash" 

console.log(myname);
console.log(anothername);

// 2.Heap-Used in Non- Primitive(Gives Reference)
let userOne = {
    email:"sammodeb28@gmail.com",
    upi:"sammo@28"
}

let userTwo = userOne

userTwo.email="akash@gmail.com"

console.log(userOne);
console.log(userTwo);
