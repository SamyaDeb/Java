/*
NOTES-
Js Variables-Variables are containers for storing values.JS variables can be declared in 4 ways
1.Automatically-Bad Practice
2.Const-Always use const when value or type shouldn't change
3.Let-Only use let if can't use const
4.Var-Prefer not to use becuase of issue in block scope and functional scope
*/
"usestrict"
const account_ID=12345;
let Name="Samya";
let place="West Bengal";
Home_Location="Noida";//Declared Automatically

console.table([
    account_ID,
    Name,
    place,
    Home_Location
]);

console.log(account_ID,Name,place);

console.table({
    account_ID,
    Name,
    place,
    Home_Location
});
