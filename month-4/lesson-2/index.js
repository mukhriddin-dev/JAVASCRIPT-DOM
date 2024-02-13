// let letters=["a", "b", "c", "d", "e", "f"];


// let add1=letters.concat(numbres);


// let add2=[...letters];
// let add2=[ ...letters, ...numbres];

// add2.push(66)

/// shalow copy deep copy
/// ... SPREAD OPERATOR
/// ... rest operator

// let numbers=[1,2,3,4,5,6,7,8,9,10];

// let [one, two , three, ...other]=[1,2,3,4,5,6,7,8,9,10];

// console.log(one, two , three , other)
// console.log(numbers[0])

// console.log(letters)
// console.log(add1)
// console.log(add2)


// let langs=['js', 'nodejs', 'angularjs', 'facebookjs'];

// let [first]=langs;

// console.log(first)


// let person={
//     name:"Otabek",
//     age:25,
//     occupation:"programmer",
//     hobiies:{
//         sports:"basketball",
//         music:"rock",
//         movies:"NetFlix & Youtube"
//     }
// }



// const user=person; // shalow copy

// user.weigth=50;

// const user2={...person}

// user2.hieght=1.77;

// console.log("orginal: ", person);
// console.log("shalow: ",user)
// console.log("deep: ", user2)

// const {age,hobiies,hobiies:{movies}, name}=person;





function getOddNumver(n){
    if(n%2==0){
        console.log("odd number")
    }
}


const getNumber=(func)=>{
   return func(10)
}

const res=getNumber(setNum)


function setNum(n){
    return n*2
}


// console.log(first)