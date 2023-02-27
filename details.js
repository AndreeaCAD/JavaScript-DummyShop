import {populateUi, getQueryParams} from './modules/render.js';

const title = document.getElementById('productDetailsTitle');
const category = document.getElementById('productDetailsCategory');
const price = document.getElementById('productDetailsPrice');
const stock = document.getElementById('productDetailsStock');
const description = document.getElementById('productDetailsDescription');
const images = document.getElementById('productDetailsImages');



// functie care sa ne returneze id-ul sau o alta cheie 
//am comentat-o pentru ca am scris aceasta functie in render ca sa o generalizam si sa o putem folosi si in alta parte
// function getQueryParams(paramKey) {
//    const stringParams = location.search;
// //    console.log(stringParams, stringParams.slice(1),stringParams.slice(1).split('&'));


// const params = stringParams.slice(1).split('&');// metode ale stringului: slice-scoate afara primul caracter(la noi este ?), split - facem pt a face un array din string despartit la &
// //params =['id=1', 'title=iPhone%209']
//   let val = null; // am declarat o variabila val nula 
//    params.forEach((elem, index) => {
//     if(elem.includes(paramKey)) { //(daca elementul include acea cheie id=1 si paramkey ="id")
//         //am obtinut dupa elem.split => ["id", "1"];
//         val = elem.split('=')[1];//aici am obtinut al doilea element din array care are index 1 deoarece vrem valoare id ului
//     }
//    })
//    return val;
// }

let myHeaders = new Headers({
    'Content-Type': 'application/json'
});

async function getProductById(id) {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`, myHeaders );
        const data = await res.json();
        return data;
    }
    catch(error){
        console.log(error)

    }
}

function buildDetails(data) {
    title.innerText = data.title;
    category.innerText = data.category;
    price.innerText = data.price;
    stock.innerHTML = `<a style="color: red; margin-right: 0.2rem;">${data.stock}</a>`;
    description.innerText = data.description;

    const fragment = document.createDocumentFragment();
    data.images.forEach(photoLink => {
        const img = document.createElement('img');
        img.src = photoLink;
        img.alt = 'product';
        fragment.append(img);
    })
    images.append(fragment);
}

window.onload = async () => {
    const productId = getQueryParams('id');
    console.log('id', productId);
    const product = await getProductById(productId);
    console.log(product)
    populateUi([product], buildDetails);//product este un obiect si pt ca functia  populateUI(pe care am scris-o in render) se asteapta sa vada un array ca parametru de aceea vom face obiectul un array prin []: ex [product]
}

// 2 moduri in care se poate scrie o functie 

// declarativ care se poate scrie     function test() {}
// 

// arrow function 
// const test2 = () => {

// }



