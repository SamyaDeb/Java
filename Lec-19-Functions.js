function addTwoNumbers (First,Second){ //()-(Parameters)
    console.log(First+Second);  
}
addTwoNumbers(6,9) //()-(Arguements);
                   //If Only addTwoNumbers written then it's an reference;
                   //If addTwoNumbers() witten then it's a execution
addTwoNumbers(6,"9")
addTwoNumbers(8,null)
addTwoNumbers(8,true)//truen counts as boolean number

//Method-1
function NewAddTwoNum(number1,number2){
    let result = number1+number2
    return result//Result ke baad kuch bhi print nhi hoga 
    console.log(Samya);//Will Not Print
}
const result = NewAddTwoNum(9,8)
console.log("Result:",result);

//Method-2
function NewAddTwoNum(number1,number2){
    return number1+number2
}
const Result = NewAddTwoNum(9,8)
console.log("Result:",Result);

function loginusermessage(username){
    return `${username} just loggedin`
}
console.log(loginusermessage("Samya"));
/////////////////////////////////////////
function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Samya"));
/////////////////////////////////////////
function loginUserMessage(username = Akash){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Samya"));


