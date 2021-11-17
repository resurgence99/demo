console.clear()
console.log("js")

const btn = document.getElementById('button-1')
console.log(btn)
console.log(btn.innerHTML)
console.log(btn.textContent)

// const heading = document.getElementsByClassName('header')
// console.log(heading[0])

//const heading = document.getElementsByTagName('h1')
//const heading= document.querySelector('.header')//access query like css file for each single element
const heading = document.querySelectorAll('.header')//multiple element to access at once
console.log(heading)
heading.forEach(element => console.log(element))

// for(let i=0;i<2;i++){
//     console.log(heading[i].textContent)
// }

