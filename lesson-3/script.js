"use strict";

// let loginForm = document.querySelector("#login_form");
// let parol = document.querySelector("#password");
// let userName = document.querySelector("#username");
// let visible = document.querySelector(".visible");

// class -> OOP

//    


// console.log(loginForm.id) // login form
// console.log(userNameForm.placeholder) // plase filll user name
// console.log(passwordForm.type) // password


// passwordForm.type="range";
// userNameForm.placeholder="ENTER PHONE NUMBER";

// // let dt=passwordForm.getAttribute("placeholder");             // get
// // passwordForm.setAttribute('placeholder', 'Enter secret key') // set
// // userNameForm.setAttribute('value', "hello world")
// // console.log(userNameForm.getAttribute('value'));

// // console.log(dt)


// // function toggleForm() {

// //     let username = userName.value;
// //     let password = parol.value;

// //     console.log(username)
// //     console.log(password)

// //     if (username.length < 8) {
// //         userName.style.cssText = "border: 2px solid crimson";
// //     }
// //     else if (username.length >= 8) {
// //         userName.style.cssText = "border: 2px solid green";
// //     }
// //     if (password.length < 6) {
// //         parol.style.cssText = "border: 2px solid crimson";
// //     } else if (password.length >= 6) {
// //         parol.style.cssText = "border: 2px solid green";
// //     }

// // }

// // function resetForm() {
// //     parol.value = "";
// //     userName.value = "";
// //     alert("Clear")
// // }









// let h1 = document.querySelectorAll('h1')[0];


// // h1.textContent="Welcome to DOM";
// // h1.setAttribute('class', 'header_title');


// console.log(h1.hasAttribute('class'))



// function visiblePassword() {
//     let typePasswordInput = parol.getAttribute('type');

//     if (typePasswordInput === 'password') {
//         parol.setAttribute('type', 'text');
//         visible.innerHTML = "<i class='bx bx-hide' ></i>";
//     }
//     else if (typePasswordInput === 'text') {
//         parol.setAttribute('type', 'password');
//         visible.innerHTML = "<i class='bx bx-show' ></i>";
//     }
// }


// let card=document.querySelector(".card");


// card.classList.add('bg-red','text-center', 'hide');
// card.classList.remove('hide','bg-red');
// console.log(card.classList.contains('text-center'));

// card.classList.toggle('text-center')

// card.classList.toggle('text-center')

// card.classList.toggle('text-center')

// card.classList.toggle('hide')

// card.classList.toggle('hide')

// console.log(card.classList)


// .add()
// .remove()
// .contains() // boolen 
// .toggle()

let toogleBtn = document.querySelector('.menu'),
    menuList = document.querySelector(".menu_list");


function setToggle() {
    menuList.classList.toggle('swipe')
}


let carousel__list = document.querySelector(".carousel__list");
let images = document.querySelectorAll(".carousel__list--item");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

console.log(images)

let step = 0;


const nextSlide = () => {
    step++;
    if (step > images.length-1) {
        step = 0;
    } else {
        console.log(-step * 700)
        carousel__list.style.transform = `translateX(${-step * 700}px)`;
    }
}

const prevSlide = () => {
    step--;
    if (step<0) {
        step = images.length-1;
    } else {
        console.log(-step * 700)
        carousel__list.style.transform = `translateX(${-step * 700}px)`;
    }
}



