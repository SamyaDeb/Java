//Immediately Invoked Function Expression-IIFE
/*
Before ES6 (let and const), all variables declared with var were global if not inside a function.
So, developers used IIFEs to avoid polluting the global scope.
*/
(function chai(){
    console.log(`First DB Connected`)
})();

(() => {
    console.log(`Seconed DB Connected`)
})()

