//"use strict";
// x = 12
// console.log(x)
// let userage = Number(prompt("Enter your age"))
// userage += 5
// console.log("your user age is "+ userage)
// const above = function(){
   // console.log("hey i'm js")
//     alert("your user age is "+ userage)
// }
// setTimeout(above, 5000)
let age = 20;
setInterval(() => {
    console.log("age", age++)
}, 2000);