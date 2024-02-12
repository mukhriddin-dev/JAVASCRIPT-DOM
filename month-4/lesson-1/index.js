"use strict";

// data type  :  8 ta , 2 ta turga bo'linadi
// primative , reference



// if([]==[]){
//     console.log("first data type")
// }else{
//     console.log("no data type")
// }


// let arr=[1,2,3,4,5,6,7,8,9,10];
// let slice1=arr.slice(0,3);
// let splice1=arr.splice(0,5)
// console.log("sp",splice1)
// console.log(slice1)
// console.log(arr)
// const arr=[1,2,3,4,5,6,7,8,9];
// const isBigNumber=arr.every((val)=> val>1)
// console.log(isBigNumber)
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every((currentValue) => currentValue >0));


// Object 

// Object literal

// let obj={isActive:true, name:"Global Object"}
// let obj2=new Object({name:"Global Object 2"})
// obj.type="Refrence";
// obj.isActive=false;
// console.log(obj.name)
// console.log(obj['name'])
// console.log(obj) // true
// console.log(obj)


const obj={name:"Global Object", status:'active', n4:24};
delete obj.status;


// object to JSOn

// const obj2={...obj}


// const respnse=JSON.parse( JSON.stringify(obj) )


// let a=[1,2,3];
// let b=[...a]; // shalow cloen

// b.push(4) // deep copy
// console.log("a", a)
// console.log("b",b )



// ------------ TODO APPP    ------------------

let data=[];
let submitForm=document.querySelector('#submit');
let inputText=document.querySelector('#text');
let list=document.querySelector(".list");
let resetBtn=document.querySelector('#reset');

submitForm.addEventListener('click', ()=>{
    let val=inputText.value.trim();
   
    
    if(val.length){
        data.push({title: val})
        renderData()
        inputText.value=""
    }
    else{
        alert("Please enter a value")
    }
    console.log(data)
})


function renderData(){
   
    data?.forEach((el,index, arr)=>{
        const listItem=document.createElement('li');
        listItem.innerHTML=`task: ${el.title}`;
        list.appendChild(listItem)
        
    })
}

function reset(){
    data=[];
    renderData()
    list.innerHTML=""
}


resetBtn.addEventListener('click', ()=>{
    reset();
    inputText.value=""
    console.log("first")
})



