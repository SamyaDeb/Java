/*The Array object, as with arrays in other programming languages, enables storing a collection of 
multiple items under a single variable name, and has members for performing common array operations.

JavaScript array-Copy operations create shallow copies.(All standard built-in copy operations with any 
JavaScript objects create shallow copies, rather than deep copies).

1.Shallow Copies-A shallow copy of an object is a copy whose properties share the same references 
(point to the same underlying values) as those of the source object from which the copy was made.

2.Deep copy-A deep copy of an object is a copy whose properties do not share the same references
(point to the same underlying values) as those of the source object from which the copy was made.
*/

// const myArr = [0,1,"Akash",2,3,4,true,"Samya"]
// console.log(myArr[2]);//For printing the element in third position

// const myHeros = ["Spiderman","Ironman","Hulk"]
// console.log(myHeros);

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2);

//Array Methods

const Arr = [0,1,2,3,4,5,6]
Arr.push(3)//---adds the element at the end of the array
console.log(Arr);

// Arr.pop()//---Removes the last element from the array
// console.log(Arr);

// Arr.unshift(9,3)//---Adds one or more elements to the beginning of an array
// console.log(Arr);

// console.log(Arr.includes(9));//---Checks if an array contains a specific element.
// console.log(Arr.indexOf(3));//---Returns the index of the first match of an element,or -1 if not found.

// const newArr = Arr.join()//---Converts all elements of an array into a single string.
// console.log(Arr);
// console.log(newArr);

//Slice-Returns a shallow copy of a portion of an array without modifying the original.
//Splice-Adds, removes, or replaces elements in-place (modifies the original array).

console.log("A ", Arr);

const myn1 = Arr.slice(1, 4)//(Starts,end)-Last Index Not Included
console.log(myn1);

console.log("B ", Arr);

const myn2 = Arr.splice(3,2)//Removes Element(Removes 2 elements starting from index 3)
console.log(myn2);//Removed Value

console.log("C ", Arr);//Original Array Is Now Modified after using splice
