// console.log("Hello World");
// var i = 10.5;
// console.log(" string value "+i+20);
//comments
// below is es6 type JS
// let k = 20;
// const t = 45;
// k=40;
// console.log("value of k ="+k+" value of t = "+t);
// if(t%2==0){
//     console.log("Even number");
// }
// else if(k%2!=0){
//     console.log("Odd number");
// }
// else{
//     console.log("else")
// }


//type coercion
// if(m==n){
//     console.log("equal",typeof n);
// }
// else{
//     console.log("not equal");
// }

//strict equals
// if(m===n){
//     console.log("equal",typeof n);
// }
// else{
//     console.log("not equal");
// }

//NaN means Not a Number
// let m=10;
// let n="A";
// n=Number(n);
// console.log(typeof n,n);
// m = String(m);
// console.log(typeof m,m);

// console.log(typeof String(true));
// console.log(typeof String(false));

// console.log(Number(true));
// console.log(Number(false));

// let obj = {
//     id: 10,
//     name: "John",
//     occupation: "farmer",
//     livesInCity: "false",
// }
// obj.name = "Mike";
// console.log(obj);
// console.log(obj.name);
//console.log(obj["name"]);

// for(let i=0;i<11;i++){
//     console.log(i);
// }

// let i=0;
// while(i<11){
//     console.log(i);
//     i++;
// }

//let a = new Array(10,20,99);

// let a = [10,20,30,50,true,"name"]
// console.log(a[3]);
// for(const i of a){

//     if(i===30){
//         continue;
//     }

//     console.log(i)
// }

// function add(a,b){
//     return a+b
// }

// const add= function(a,b){
//     return a+b;
// }

//const add = (a,b)=>console.log("Hello world")

//const add = (a,b)=>a+b

const add = (a,b)=>{
    console.log("calculating sum")
    a+b
    a*b
}
let sum = add(10,15)
console.log(sum)

const displayName = person =>{
    console.log(person);
}
displayName("Ganesh")





