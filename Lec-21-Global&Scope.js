//{}-Jab ye koi function or if-else ke andar hota hai tab isko scpoe bolte hai
//if ke andar ka ye {} -Block scope hai;aur baki sab global scope
//Global scope me jo bhi likhenge wo value humare liye function or if-else ka {}-iske andar available hoga;
//lekin block scope ka koi value global scope scope ke liye available nhi hai

var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    d = 40
}
// console.log(a);-Don't Gives Output,Takes value from Global Scope
// console.log(b);-Don't Gives Output,Takes value from Global Scope
console.log(c);//-But Var & Automatically Declared Gives Output From Block Scope
console.log(d);

//Just Remember-Browser console and node ke andar global scope alag hota hai