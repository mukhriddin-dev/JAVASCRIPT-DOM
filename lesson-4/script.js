"use  strict";

let wrapper = document.querySelector('.wrapper');


db.forEach((el)=>{
   
let card=document.createElement('div');
card.classList.add('card');

card.innerHTML = `
<img class="card__img" src="${el.image}" alt="${el.title}">

<div class="card-body">

    <h5>${el.title.substring(0,20)}</h5>
    <strong class="fs-4"> ${el.price}$</strong>

    <p>${el.description.substring(0,20)}</p>
    <span class="card__category">category: ${el.category}</span>
    <div class="d-flex gap-2">
        <span>Rate: ${el.rating.rate}</span>
        <span>Count: ${el.rating.count}</span>
    </div>

    <button class="btn btn-success w-100 mt-4">
        add to cart
    </button>

</div>


`;

wrapper.appendChild(card);

})