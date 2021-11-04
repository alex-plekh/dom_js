// Задача 4 (делаем с применением async/await)
// Необходимо получить данные с сервера по урлу https://
//     jsonplaceholder.typicode.com/users , и отобразить информацию о
// пользователях.
//     Необходимо отобразить кнопку и по нажатию на нее делать запрос на
// сервер для получения данных.
//     После того как данные получены, кнопку скрыть и отобразить контент
// который содержится в ответе с сервера
// Всю информацию о пользователе, необходимо отобразить в виде
// карточек с информацией
// Сделайте по возможности красиво, разметка и стили на ваше
// усмотрение.

const mainBtn = document.createElement('button');
const container = document.createElement("div");
mainBtn.innerHTML = 'Get information about users';
mainBtn.style.width = '300 px';
mainBtn.style.height = '100 px';
mainBtn.style.textAlign = 'center';
mainBtn.style.backgroundColor = '#00FFFF';
mainBtn.style.fontSize = '18px';
mainBtn.style.cursor = 'pointer';
mainBtn.style.padding = '10px 15px';
container.style.textAlign = 'center';
document.body.appendChild(container);
container.appendChild(mainBtn);


// async function getUserFromServer() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     return  await response.json();
// }
//
// mainBtn.addEventListener("click", e => {
//     mainBtn.hidden = true;
//     const body = document.querySelector('body');
//
//     getUserFromServer()
//         .then(users => {
//             // let count = 0;
//             // for (let user of users) {
//             console.log(users)
//                 let user = users.map(item => {
//         return `
//          <div class="card">
//           <h2 class="name">${item.name}</h2>
//           <p class="userName">user name: ${item.username}</p>
//           <div class="adress">adress :
//             <span class="city">${item.address.city}, </span>
//             <span class="suite">${item.address.suite}</span>
//           </div>
//           <p class="company">working in ${item.company.name}</p>
//           <div class="contacts">
//             <span>contacts: </span>
//             <span>${item.email}, </span>
//             <span>${item.phone}</span>
//           </div>
//         </div>
//         `
//     }).join('')
//
//             console.log(user)
//             // }
//         })
//         .catch(error => console.log(error));
// });

// mainBtn.addEventListener("click", e => {
//     mainBtn.hidden = true;
//     const body = document.querySelector('body');
//
//
// async function getUserFromServer() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await response.json();
//     let user = data.map(item => {
//         return `
//          <div class="card">
//           <h2 class="name">${item.name}</h2>
//           <p class="userName">user name: ${item.username}</p>
//           <div class="adress">adress :
//             <span class="city">${item.address.city}, </span>
//             <span class="suite">${item.address.suite}</span>
//           </div>
//           <p class="company">working in ${item.company.name}</p>
//           <div class="contacts">
//             <span>contacts: </span>
//             <span>${item.email}, </span>
//             <span>${item.phone}</span>
//           </div>
//         </div>
//         `
//     }).join('')
//
// }
// })

mainBtn.addEventListener("click", e => {
    mainBtn.hidden=true;
    const body = document.querySelector('body');
    const url = fetch('https://jsonplaceholder.typicode.com/users');

    url.then(response => response.json())
        .then(users => {
            let count = 0;
            for (user in users) {
                body.innerHTML += `<div 
                class="section-${count}" 
                style="width: 100%; text-align: center; vertical-align: center; margin: 0 10px 20px;"
                ></div>`;
                body.style.background = '#98FB98'
                createHeading(users[user], `.section-${count}`);
                // createImage(users[user], `.section-${count}`);
                // createInfo(users[user], `.section-${count}`);
            }

        })

        .catch(error => console.log(error));

    function createHeading({title}, elem) {
        body.querySelector(elem).innerHTML +=
            `<header 
            style="text-align: center; margin:40px 0 40px 0; font-size: 40px; font-weight: 800; color: #414a4c;"
        >${name}</header>`;
    }

    // function createInfo({info}, elem) {
    //     let infoHTML = info.map(paragraph =>
    //         `<p style="font-size: 30px;font-weight: 500; width: 75%; text-align: center; margin: 0 auto;line-height: 1.5"
    //         >${city}</p>`);
    //     body.querySelector(elem).innerHTML += infoHTML.join('');
    // }
    // function createImage({url, title}, elem) {
    //     body.querySelector(elem).innerHTML +=
    //         `<img 
    //         src="${url}" 
    //         alt="${title}" 
    //         style="text-align: center; width: 800px; height: auto; border-radius: 20px;margin-bottom: 40px;">`;
    // }
})
