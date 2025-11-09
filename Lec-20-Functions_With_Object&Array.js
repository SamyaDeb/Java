function CalculateCartPrice(...num){ //(...____)-Rest Operator-Use to pass multiple values
    return num
}
console.log(CalculateCartPrice(200,300,120,420));

function CalculateCartprice(val1,val2,...num){ //-First and sencond number goes to val1 & val2;Rest values goes to the new Array
    return num
}
console.log(CalculateCartprice(200,300,120,69));

//Shopping Cart Problem-

const user = {
    CourseName: "BABASODA",
    price: 999
}

function handleObject(anyobject){
    console.log(`CourseName is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) //Object Pehele Se hi set hai

handleObject({     //Direct Object Pass
    username: "sam",
    price: 399
})

const myNewArray = [200,500,300,123]

function newfunction(getArray){
    return getArray[2]
}
console.log(newfunction(myNewArray));
console.log(newfunction([200,500,300,123]));

