"use strict";



// func 1  (5s)

// async function generateNumber() {

//     let summa = 0;

//     for (let i = 0; i < 10000; i++) {
//         summa += i
//     }

//     return await summa
// }

// let number = generateNumber();

// number.then((r) => { console.log(r) })

// number.catch((rrr) => { console.log(rrr) })

// number.finally(() => { console.log("generated") })

// // func 2 (1s)

// async function sayHello() {
//     let message = await "hello World!"
//     console.log(message)
// }

// sayHello()

/// addEventListener 
/// seTimeout
///  setInterval




// let request=new Promise((resolve, reject)=>{

//     let isDone=true;

//     let data=[1,2,3,4,5,6,7,8,9]

//     if(isDone){
//         resolve(data);
//     }else{
//         reject("404 error")
//     }

// });

// request.then((data)=>console.log(data))
// .catch((err)=>console.log(err))
// .finally(()=>console.log("task done"))


// let baseURL="https://jsonplaceholder.typicode.com";
// let endPoint="/posts";


// let requestURL="http://jsonplaceholder.typicode.com/posts";

// const data=fetch(requestURL);

// data
// .then((response)=> response.json())
// .then((result=>console.log(result)))
// .catch((err)=>console.log(err))
// .finally(()=>console.log("task done"))







// promise State ->  [ pending , fulfilled , rejected ]

// if promise state == fullfiled -> result ->  resolve(data) -> .then((d)=> console.log(d))
// if promise state== rejected ->  result -> reject(error) -> .catch((err)=> console.log(err))
// .finally -> resolve(data) or reject(err) -> finish !



/// async function -> promise
/// .fetch -> promise



// console.log(window)


/// STATUS

// 100 -> Informational status
// 200 -> Success status
// 300 -> Redirect status
// 400 -> User error 
// 500 -> Server error

/// 192.187.009.01 -> domain

let wrapper=document.querySelector('.wrapper');

let POSTS="http://jsonplaceholder.typicode.com/posts";


function getPosts(reqURL){
    wrapper.innerHTML="<h1>LOADING ......</h1>"
    fetch(reqURL)
    .then((response=>response.json()))
    .then((result=>renderData(result)))
    .catch((err=>console.log(err)))
    .finally(()=>console.log("done"))
}


getPosts(POSTS)


function renderData(data){
    
    if(data.length){
        wrapper.innerHTML=""
        data.forEach((el)=>{
            let listItem=document.createElement('li');
            listItem.classList.add('list-item');
            listItem.innerHTML=`
            <h3>${el.title}</h3>
            <p> ${el.body} </p>
            `;

            wrapper.appendChild(listItem)
        })
    }else{
        wrapper.innerHTML="NOT FOUND"
    }
}












