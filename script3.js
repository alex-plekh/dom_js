// Задача 3 (делаем с применением промисов)
// Необходимо получить данные с сервера по урлу https://trevadim.github.io/
//     vue/data/data.json , и отобразить информацию о планетах.
//     Необходимо отобразить кнопку и по нажатию на нее делать запрос на
// сервер для получения данных.
//     После того как данные получены, кнопку скрыть и отобразить контент
// который содержится в свойстве planets
// Сделайте по возможности красиво, разметка и стили на ваше
// усмотрение.

const mainBtn = document.createElement('button');
const container = document.createElement("div");
mainBtn.innerHTML = 'Get information';
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


mainBtn.addEventListener("click", e => {
    mainBtn.hidden=true;
    const body = document.querySelector('body');
    const url = fetch('https://trevadim.github.io/vue/data/data.json');

    url.then(response => response.json())
        .then(({planets}) => {
            let count = 0;
            for (planet in planets) {
                body.innerHTML += `<div 
                class="section-${count}" 
                style="width: 100%; text-align: center; vertical-align: center; margin: 0 10px 20px;"
                ></div>`;
                body.style.background = '#98FB98'
                createHeading(planets[planet], `.section-${count}`);
                createImage(planets[planet], `.section-${count}`);
                createInfo(planets[planet], `.section-${count}`);
            }

        })

        .catch(error => console.log(error));
    
    function createHeading({title}, elem) {
        body.querySelector(elem).innerHTML +=
            `<header 
            style="text-align: center; margin:40px 0 40px 0; font-size: 40px; font-weight: 800; color: #414a4c;"
        >${title}</header>`;
    }
    
    function createInfo({info}, elem) {
        let infoHTML = info.map(paragraph =>
            `<p style="font-size: 30px;font-weight: 500; width: 75%; text-align: center; margin: 0 auto;line-height: 1.5"
            >${paragraph}</p>`);
        body.querySelector(elem).innerHTML += infoHTML.join('');
    }
    function createImage({url, title}, elem) {
        body.querySelector(elem).innerHTML +=
            `<img 
            src="${url}" 
            alt="${title}" 
            style="text-align: center; width: 800px; height: auto; border-radius: 20px;margin-bottom: 40px;">`;
    }
})







