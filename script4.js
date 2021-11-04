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


const myBtn = document.createElement('button');
const container = document.createElement("div");

myBtn.innerHTML = 'Get information about users';
myBtn.style.width = '400 px';
myBtn.style.height = '100 px';
myBtn.style.textAlign = 'center';
myBtn.style.backgroundColor = '#00FFFF';
myBtn.style.fontSize = '18px';
myBtn.style.cursor = 'pointer';
myBtn.style.padding = '20px 20px';
myBtn.style.margin = '40px';
myBtn.style.border = 'none';
myBtn.style.borderRadius = '8px';
container.style.textAlign = 'center';
document.body.appendChild(container);
container.appendChild(myBtn);


async function getUserFromServer() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}

myBtn.addEventListener("click", e => {
    myBtn.hidden = true;
    
    container.style.background = '#ffffcc';
    container.style.textAlign = 'center';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.justifyContent = 'space-between';
    
    getUserFromServer()
        .then(users => {
            for (let user of users) {
                createCard(user);
            }
        })
        .catch(error => console.log(error));


    function createCard(user) {
        let div1 = document.createElement("div");
        div1.style.width = '30%';
        div1.style.margin = '40px 20px';
        div1.style.backgroundColor = '#ccccff';
        div1.style.borderRadius = '10px';
        container.appendChild(div1);

        for (data in user) {
            let inf;
            if (typeof user[data] == 'object') {
                inf = data + " : ";
                for (field in user[data]) {
                    if (typeof user[data][field] == 'object') {
                        inf += field + " ";
                        for (innerField in user[data][field]) {
                            console.log(innerField + field[innerField]);
                            inf += innerField + " : " + user[data][field][innerField] + "  ";
                        }
                    } else {
                        inf += field + "  " + user[data][field] + ",  ";
                    }
                }

            } else {
                inf = data + "   " + user[data];
            }
            let p1 = document.createElement("p");
            p1.style.lineHeight = '2';
            p1.style.fontWeight = '500';
            p1.style.margin = '0 10px 0 10px';
            div1.appendChild(p1);
            p1.innerHTML = inf;
        }
    }
});

