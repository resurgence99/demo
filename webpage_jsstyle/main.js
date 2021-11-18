console.clear()
//console.log("js")

// const btn = document.getElementById('button-1')
// console.log(btn)
// console.log(btn.innerHTML)
// console.log(btn.textContent)

// const heading = document.getElementsByClassName('header')
// console.log(heading[0])

//const heading = document.getElementsByTagName('h1')
//const heading= document.querySelector('.header')//access query like css file for each single element
//const heading = document.querySelectorAll('.header')//multiple element to access at once
// console.log(heading)
// heading.forEach(element => console.log(element))

// for(let i=0;i<2;i++){
//     console.log(heading[i].textContent)
// }

const h1 = document.getElementById('h1New')
const div = document.getElementById('container')
const h2 = document.createElement("h2")
h2.innerHTML = "Secondary Header"

const btn = document.createElement("button")
btn.innerHTML = "JS Button"

//btn.classList.add("buttonStyle")

btn.classList.toggle("buttonStyle")//to turn of or on the style or class
//btn.classList.remove("buttonStyle")//to remove style
//btn.style.color = "red"
//btn.style.fontSize = "25px"//use camel case where first letter is small cause JS does not support "-"

div.appendChild(h2)
div.appendChild(btn)

const callBackFunction = function(e) {
    console.log(e.target)
    e.target.style.fontSize = "40px"
    h1.classList.toggle("hidden")
    // if(h1.classList.contains("hidden") ){
    //     h1.classList.remove("hidden")
    // }
    // else{
    //     h1.classList.add("hidden")
    // }
}

btn.addEventListener('click',callBackFunction)//call back functions are passed as arguments in a function

