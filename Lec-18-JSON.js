//Object De-structuring
const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}

course.courseInstructor
console.log(course.courseInstructor);


const {courseInstructor: instructor} = course//Object De-structuring Through{}

// console.log(courseInstructor);

console.log(instructor);

//API-They are in JSON format

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]