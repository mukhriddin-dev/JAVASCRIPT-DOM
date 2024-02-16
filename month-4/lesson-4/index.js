// countryList => Array
// regionName => String

function searchCountry(countryList, regionName) {
    return countryList.filter((el) => el.region.toLowerCase() === regionName.toLowerCase())
}

const result = searchCountry(country, 'Africa') // [array]




function sortPopulation(countryList, populationCount) {
    return countryList.filter((el) => el.population >= populationCount)
}

const population = sortPopulation(country, 30000000);



function sortCurrency(countryList, currency) {

    return countryList.filter((el) => String(el?.currencies[0].symbol).toLowerCase() === currency.toLowerCase())

}

const currency = sortCurrency(country, '$')


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map orqali natija [{id:11 , title: "object-1"},{id:12 , title: "object-2"} ....etc {id:110 , title: "object-10"}]

// function makeObject(array) {
//     if (array.length > 0) {
//         return array.map((el) => {
//             return {
//                 id: '1' + el, title: `object-${el}`, bayroq: {
//                     png: flags.png,
//                     svg: flags.svg
//                 }
//             }
//         })
//     }
// }

// const newObject = makeObject(array)

// console.log(newObject)


let products = [
    {
        name: "test1",
        price: 12
    },
    {
        name: "test2",
        price: 11
    },
    {
        name: "test3",
        price: 10
    },
    {
        name: "test4",
        price: 4
    }
]


function countPrice(country) {

  return  country.map((a)=>a.population).reduce((a,b)=>a+b)

}

const summa=countPrice(country)


// console.log(summa.toLocaleString('de-De'))

let card=document.querySelector('.card');
let wrapper = card.querySelector('.wrapper');
let btns=document.querySelectorAll('.btn');

let btn=document.createElement('button')
btn.classList.add('btn','btn-danger');
btn.innerHTML="Click";

card.append(btn)



card.addEventListener('click', (e)=>{
    
    if(e.target.classList.contains('btn-danger')){
    
    }
})

