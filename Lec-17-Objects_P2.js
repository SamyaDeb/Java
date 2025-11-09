const tinderUser1 = new Object()//Singleton Object
const tinderUser2 = {}//Non Singleton Object

tinderUser1.id ="123abc"
tinderUser1.name = "Samya"
tinderUser1.isLoggedIn = false

console.log(tinderUser1);
console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));
console.log(tinderUser1.hasOwnProperty('isLoggedIn'))


const regularUser = {
    email : "Sam@gmail.com",
    full_name:{
        userfullname:{
            firstname: "Samya",
            lastname: "Biswas"
        }
    }
}
console.log(regularUser.full_name.userfullname);//Nested

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
//const obj3 = Object.assign({},obj1,obj2)//Object.assign(target,Source)-If you want to create a new merged object instead of changing obj1,you can do it
const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "k@gmail.com"
    },
]

const Tinder = users[0].email
console.log(Tinder);

