"use strict";

// --------------- ELEMENTS ----------------
let cardWrapper = $('.wrapper');

let brandOption = $("#brands");

let priceOption = $("#price");

let lettersOption = $("#letters");





// ------------ EVENT LISTENER start --------------------



// ----------------- VARIABLES ----------------

let brand = [];



// ------------ RENDER FUNCTION start --------------------


function renderProducts(data = []) {

    if (data.length > 0) {

        data.forEach((el) => {

            const { title, brand, thumbnail, price, discountPercentage } = el;

            const card = render('div', 'card',
             `
                         <img src="${thumbnail}" alt="">
                         <p>${title}</p>
                         <p><span>${price}</span> <span>${Math.round(price * 1.44)}</span></p>
                         <p>Save - ₹32999 | ${brand}</p>
                         <div>
                          ${Math.round(discountPercentage)}%
                          OFF
                         </div>
`);

            cardWrapper.appendChild(card);

        });
    } else {
        cardWrapper.innerHTML = `<h1 class="text-center"> NOT FOUND </h1>`
    }

}
renderProducts(product.products)

// ------------ RENDER FUNCTION end --------------------


function findBrand(data) {

    if (data.length > 0) {

        data.forEach((el) => {

            if (!brand.includes(el.brand)) {
                brand.push(el.brand)
            }

        })
    }

}

findBrand(product.products)




// ------------ render barnd ------------------------


function renderBrand(data) {


    if (data.length > 0) {

        data.forEach((el) => {

            const option = render('option', '', el)
            brandOption.appendChild(option)

        })

    }

}


renderBrand(brand)



brandOption.addEventListener('change', (e) => {
    sortBrands(e.target.value)
})


function sortBrands(brandNmae) {

    cardWrapper.innerHTML = ""

    const filterBrand = product.products.filter(el => {
        return el.brand.toLowerCase() == brandNmae.toLowerCase()
    })


    renderProducts(filterBrand)


}






