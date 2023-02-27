import {populateUi} from './modules/render.js';

const container = document.getElementById('usersList');

//get users list cu async await
let myHeaders = new Headers({
    'Content-Type': 'application/json'
});

const getUsers = async () => {
    //try this task
    try {
        const res = await fetch('https://dummyjson.com/users', { headers: myHeaders });
        // when fetch promise is resolved then..
        const data = await res.json();
        return data;
    }
    // when fetch promise is rejected with an error
   catch(error) {
    console.log(error)
   }
}

//user details
const userCard = (data) => {
    const userContainer = document.createElement('div');
    userContainer.className ='user-container';

    const userFullName = document.createElement('div');
    userFullName.className = 'user-name';
    userFullName.innerText = data.firstName + ' ' + data.lastName;

    const image = document.createElement('img');
    image.className = 'user-image';
    image.src = data.image;

    // const userInformation = document.createElement('div');
    // userInformation.className = 'user-information';

    // const userName = document.createElement('div');
    // userName.innerText = 'Username: ' + data.username;

    // const userAge = document.createElement('div');
    // userAge.innerText = 'Age: ' + data.age;

    // const userOccupation = document.createElement('div');
    // userOccupation.innerText = data.company.title;

    // const email = document.createElement('a');
    // email.className = 'email-address';
    // email.href = 'mailto:' + data.email;
    // email.innerText = 'Email: ' + data.email;

    // const phone = document.createElement('a');
    // phone.className = 'phone-number';
    // phone.href = 'tel:' + data.phone;
    // phone.innerText = 'Phone: ' + data.phone;

    const link = document.createElement('a');
    link.href = '/userDetails.html?id=' + data.id;
    link.innerText = 'User details';

    // userInformation.append(userName, userAge, userOccupation, email, phone);

    // userContainer.append(userFullName, userName, email,phone, image, link,);
    userContainer.append(userFullName, image, link);
    return userContainer;

}

window.onload = async () => {
    console.log("done loading");
    const res = await getUsers();
    console.log(res);
   const cards = populateUi(res.users, userCard)
   container.appendChild(cards);
}
