function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website); //Not Give Output it is outside of global scope
    two()
}
//-In nested function or loops Parent function treats as Global scope;And Child function treats as Block scope

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //Not Give Output it is outside of global scope
}
// console.log(username);//Not Give Output it is outside of global scope

// ++++++++++++++++++++++++++++=>Interesting(Mini-Hosting)<=++++++++++++++++++++++++++++

console.log(addone(5))//Here we can write the name of function before writting code
function addone(num){
    return num + 1
}

const addTwo = function(num){ //Function is declared;so we have to give the reference after writting code
    return num + 2
}
console.log(addTwo(8));
