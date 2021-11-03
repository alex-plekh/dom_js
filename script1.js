// Задача 1
// Создайте h2 c текущим временем, к примеру " Время: 13:34:45";
// Примените setInterval для отображения времени каждую секунду, чтобы
// были идущие чаcы
// Создайте кнопки Start и Stop
// Навесьте обработчики события на клик.
//     При клике на Stop время должно остановиться
// При клике на Start время должно продолжить свой ход (скачек времени,
//это нормально)

let watch = document.createElement('h2');
watch.innerHTML = "<h2 id='current-time'></h2>";
document.body.appendChild(watch);

let btn = document.createElement('div');
btn.innerHTML = "<button id='start-btn'>Start</button>" + "<button id='stop-btn'>Stop</button>";
document.body.appendChild(btn);

function checkTime(item) {
    if (item<10) {
        item = "0" + item;
    }return item;
}

function watchMaking() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('current-time').innerHTML ="Время: "+hour+":"+minute+":"+second;
    date = setInterval('watchMaking()',1000);
    document.getElementById('start-btn').addEventListener('click', () => date = setInterval(watchMaking, 1000));
    document.getElementById('stop-btn').addEventListener('click', () => clearInterval(date));
}
watchMaking();