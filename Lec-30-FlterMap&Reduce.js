/*
const myNums = [1,2,3,4,5,6,7,8,9,10]
const NewNumsM1 = myNums.filter((Num) => Num > 5)

const NewNumsM2 =myNums.filter((Num) => {
    return Num < 6
    })
    console.log(NewNumsM2);
    console.log(NewNumsM1);
*/
/*   
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums =[]
myNums.filter((Num)=>{
    if (Num>5) {
        newNums.push(Num)
    }
})
console.log(newNums);
*/
/* 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk) =>bk.genre === 'Science' && bk.publish >= 1990)
console.log(userBooks);
*/
/*
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10})
*/
/*
const Nums = [1,2,3,4,5,6,7,8,9,10]
const array = []
const newNums = Nums.forEach((num=>array.push(num+10)))

console.log(array);
*/
/*
const Nums = [1,2,3,4,5,6,7,8,9,10]
const newNums = Nums
                .map((Num) => Num*10) 
                .map((Num) =>Num+1)
                .filter((Num)=>Num>50)
console.log(newNums);
*/
/*
const myNums = [1,2,3,4,5]
const myTotal = myNums.reduce(function(acc,currVal){ 
    console.log(`${acc} and ${currVal}`);     
    return acc+currVal;
},0)
console.log(myTotal);
*/
/*
const myNums = [1,2,3,4,5]
const myTotal = myNums.reduce((acc,CurrVal)=>acc+CurrVal,0)
console.log(myTotal);
*/
const shoppingCart =[
    {
        ItemName:`Bag`,
        ItemPrice:899
    },
    {
        ItemName:`PencilBox`,
        ItemPrice:199
    },
    {
        ItemName:`DrawingKit`,
        ItemPrice:1499
    }
]
const PriceToPay = shoppingCart.reduce((acc,item) =>acc+item.ItemPrice, 0)
console.log(PriceToPay);
