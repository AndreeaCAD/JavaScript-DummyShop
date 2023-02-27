import {populateUi} from './modules/render.js';

const productsList = document.getElementById("productsList");

let myHeaders = new Headers({
    'Content-Type': 'application/json'
});
//1. call to REST api

// const getProducts = () => {
//     fetch('https://dummyjson.com/products', {
//         headers: myHeaders
//     })
//when fetch promise is resolved then..
//     .then((res) => {
//         res.json().then(data => {
//             products = data;
//             console.log(products);
//         })
// when fetch promise is rejected with an error 
// .catch(error => {
    // console.log(error)
//     })
// })



// sau scris altfel cu async/await 


//2. call to rest api using async/await
const getProducts = async () => {
    //try this task
    try {
        const res = await fetch('https://dummyjson.com/products?limit=10', { headers: myHeaders });
        // when fetch promise is resolved then..
        const data = await res.json();
        return data;
    }
    // when fetch promise is rejected with an error
   catch(error) {
    console.log(error)
   }
}
// client side rendering
const card = (data) => {
    const container = document.createElement('div');
    container.className = "card-container";
    const image = document.createElement('img');
    image.src = data.thumbnail;
    image.className = "product-image";
    const title = document.createElement('h4');
    title.className = "product-title";
    title.innerText = data.title;
    const description = document.createElement('p');
    description.innerText = data.description;
    const price = document.createElement('p');
    price.className = 'card-price';
    price.innerText = data.price + " $";
    const link = document.createElement('a');
    link.href = "./details.html?id=" + data.id + "&title=" + data.title;  //query parameters smnul ? separa url ul de parametrii (cheie valoare), iar & separa parametrii intre ei
    link.innerText = "Read more";
    container.append(image, title, description, price, link);
    return container;
}



// window.onload = () => {
//     console.log("done loading");
//     getProducts()
//     .then(data => products = data)
// }

window.onload = async () => {
    console.log("done loading");
    const res = await getProducts();
    const cards = populateUi(res.products, card);
    productsList.appendChild(cards);
   
}











