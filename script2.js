// Задача 2
// Создайте h2 c текстом "События"
// Создайте блок div размером 400px на 400px
// Создайте над блоком текст с отображением координат по примеру X:
//     150 Y: 120
// Добавьте внизу блока еще один текст с содержанием "Координаты
// внутри блока: х 180, у 200"
// При движении мышки над блоком должны обновляться данные о
// расположении курсора и отображаться координаты в тексте
// соответственно осям х и у по отношению кстранице
// Внизу должны отображаться текущие координаты по x и y, но по
// отношению блока


let mainTitle = document.createElement('h2');
mainTitle.innerHTML = "<h1 id='current-time'>События</h1>";
document.body.appendChild(mainTitle);

let pageCoordinates = document.createElement('span');
pageCoordinates.innerHTML = " X:  <span> 0 </span>" + " Y: <span> 0 </span>";
document.body.appendChild(pageCoordinates);
pageCoordinates.classList.add('pageCoordinates');

let mainDiv = document.createElement('div');
mainDiv.innerHTML = "<div></div>";
mainDiv.style.width = '400px';
mainDiv.style.height = '400px';
mainDiv.style.border = '1px solid black';
mainDiv.style.boxSizing = 'border-box';
document.body.appendChild(mainDiv);

let blockCoordinates = document.createElement('span');
blockCoordinates.innerHTML = "Координаты внутри блока: X:  <span> 0 </span> " + " Y: <span> 0 </span>";
document.body.appendChild(blockCoordinates);
blockCoordinates.classList.add('blockCoordinates');

let pageCoordinatesX = document.querySelector('.pageCoordinates span:first-child');
let pageCoordinatesY = document.querySelector('.pageCoordinates span:last-child');
let blockCoordinatesX = document.querySelector('.blockCoordinates span:first-child');
let blockCoordinatesY = document.querySelector('.blockCoordinates span:last-child');

document.querySelector('html').onmousemove = function (event) {
    event = event || window.onload;
    pageCoordinatesX.innerHTML = event.pageX;
    pageCoordinatesY.innerHTML = event.pageY;
}

document.querySelector('div').onmousemove = function (event) {
    event = event || window.onload;
    blockCoordinatesX.innerHTML = event.offsetX;
    blockCoordinatesY.innerHTML = event.offsetY;
}