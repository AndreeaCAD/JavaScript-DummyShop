import {populateUi, getQueryParams} from './modules/render.js';

const fullName = document.getElementById('userFullName');
const userImage = document.getElementById('userImage');
const userAge = document.getElementById('userAge');
const userOccupation = document.getElementById('userOccupation');
const emailAddress = document.getElementById('email-address');
const phoneNumber = document.getElementById('phone-number');



window.onload = async () => {
    const userId = getQueryParams('id');
    const user = await getUserById(userId);//await ul nu blocheaza thread -ul(cursul aplicatiei), tocmai pt ca avem asyncul si ne ajuta sa-l mute in paralel tocmai pt a nu bloca
    console.log('id', userId, user);

    fullName.innerText = user.firstName + " " + user.lastName;
    userImage.src = user.image;
    userAge.innerText = 'Age: ' + user.age; 
    userOccupation.innerText = 'Occupation: ' + user.company.title;
    emailAddress.innerText = 'Email: ' + user.email;
    phoneNumber.innerText = 'Phone: ' + user.phone;
}


let myHeaders = new Headers({
    'Content-Type': 'application/json'
});


async function getUserById(id) {
    try {
        const res = await fetch(`https://dummyjson.com/users/${id}`, myHeaders );
        const data = await res.json();
        return data;
    }
    catch(error){
        console.log(error)
    }
}
