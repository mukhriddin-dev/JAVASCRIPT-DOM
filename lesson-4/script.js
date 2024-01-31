"use strict";

let wrapper=document.querySelector('.card-wrapper');




    // let boxItem=document.createElement('div');
    // boxItem.classList.add('p-5', 'bg-danger', 'm-1');
    // boxItem.textContent=`box-item-1`;
    // box.append(boxItem); 
    


// box.after(boxItem);
// box.before(boxItem);
// box.append(boxItem);
// box.append(boxItem);
// box.append(boxItem);

for(let i=0; i<products.length; i++){

    let card=document.createElement('div');

    card.classList.add('card');

    card.innerHTML=`

    <img src="https://picsum.photos/id/123/300/250" alt="product">
      <div class="card-body">

         <h5 class="card-title ${products[i].isActive ? '' : 'notOnsale'}">${products[i].name}</h5>

         <p><strong>Price:</strong> ${products[i].price} $</p>
        
         <ul>
            <li>memory: ${products[i].memory}GB</li>
            <li>brand:${products[i].brand}</li>
            <li><span class="circle" style="background:${products[i].color}"></span> </li>
        </ul>

    <button class="btn btn-primary" >
            add to cart
    </button> 
    
    `;

    wrapper.append(card);

    console.log(products[i])


}






