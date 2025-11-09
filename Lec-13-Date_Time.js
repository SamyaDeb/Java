let myDate = new Date()
console.log(myDate.toString());//Full local time + date string
console.log(myDate.toDateString());//Only date part (e.g. "Mon Jul 21 2025")
console.log(myDate.toJSON());//ISO date-time string (used in JSON)
console.log(myDate.toLocaleString());//Localized date and time
console.log(myDate.toLocaleDateString());//Localized date only
console.log(myDate.toLocaleTimeString());//Localized time only
console.log(myDate.toTimeString());//Time with time zone info
console.log(myDate.toUTCString());//Full UTC time string
console.log(myDate.getTimezoneOffset());//Minutes offset from UTC (e.g. -330 for IST)
console.log(typeof myDate);//object


let myCreatedDate = new Date(2025,6,21) 
console.log(myCreatedDate.toDateString());

let CreatedDate = new Date(2025,6,21,12,14)
console.log(CreatedDate.toLocaleString());

let myNewDate = new Date("2025-06-21")
console.log(myNewDate.toLocaleString());

let NewDate = new Date("06-21-2025")
console.log(NewDate.toLocaleString());
console.log(NewDate.getTime());

let myTimeStamp = Date.now()
console.log(Math.floor(myTimeStamp/1000));//ms to seconds converted


console.log(myDate.getMonth() + 1);
console.log(myDate.getDate());
console.log(myDate.getTime());


console.log(`Date is ${myDate.getDate()} and Time is ${myDate.getTime()}`);

const AnotherNewDate = new Date()
const result = AnotherNewDate.toLocaleString('default',{
    weekday: "long",
    timeZoneName: "short"
})
console.log(result);
