// 1. Создайте объект calculator с методами:
//     a. read() запрашивает prompt для двух значений и сохраняет их как
// свойства объекта x, y
// b. sum() возвращает сумму этих двух значений
// c. multi() возвращает произведение этих двух значений
// d. diff() возвращает разницу
// e. div() возвращает частное

// let calculator = {
//     read:function (){
//         this.x = +prompt('Enter first number');
//         this.y = +prompt('Enter second number');
//         return this;
//     },
//     sum:function (){
//         return this.x + this.y;
//     },
//     multi:function (){
//         return this.x * this.y;
//     },
//     diff:function (){
//         return this.x - this.y;
//     },
//     div:function (){
//         return this.x - this.y;
//     },
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.multi() );

// 2. Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и
// методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды
// появляется окно с сообщением, записанным в свойстве объекта message.

// let coffeeMachine = {
//     message: 'Your coffee is ready!',
//     start: function () {
//         setTimeout(function () {
//             alert(this.message);
//         }.bind(this), 3000);
//     }
// }
// coffeeMachine.start();

// 3. Создайте объект counter с методами увеличения, уменьшения значения
// счетчика и методом возврата текущего значения. Используйте концепцию
// chaining для создания цепочки вызовов.

// let counter = {
//     count: 0,
//     inc: function () {
//         this.count++;
//         return this;
//     },
//     dec: function () {
//         this.count--;
//         return this;
//     },
//     getValue: function () {
//         return this.count;
//     }
// };
// let current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current);

//4)Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.

// let me = {
//     getSum: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + ' + ' + this.y + ' = ' + calculator.sum.call(this, this.x, this.y);
//     },
//     getDiff: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + ' - ' + this.y + ' = ' + calculator.diff.call(this, this.x, this.y);
//     },
//     getMulti: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + ' * ' + this.y + ' = ' + calculator.multi.call(this, this.x, this.y);
//     },
//     getDiv: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return this.x + ' / ' + this.y + ' = ' + calculator.div.call(this, this.x, this.y);
//     }
// };
// alert(me.getSum(1, 1));
// alert(me.getDiv(1, 0));


//5)Есть следующий код:

// let country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kiev',
//         population: 2907817,
//         area: 847.66
//     }
// };
// function format(start, end) {
//     console.log(start + this.name + end);
// }

// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
//
// format.call(country, '', ''); // Ukraine
// format.apply(country, ['[',']']); // [Ukraine]
// format.call(country.capital, '', ''); // Kiev
// format.apply(country.capital, ['', '']); // Kiev
// format.apply(); // undefined


//6)Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

// const user = {
//     name: 'John'
// };
// function format(start, end) {
//     console.log(start + this.name + end);
// }
// let userFormat = format.bind(user);
// userFormat('<<<', '>>>');


//7)Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

// function concat(str1, str2, del = '-') {
//     return console.log(str1 + del + str2);
// }
// let hello = concat.bind(null, 'Hello');
// hello('World');
// hello('John');


//Level Up-Рекурсия.


//1)Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

// function cube(numb, pow = 3) {
//     if(pow !== 1) {
//         return numb * cube(numb, pow-1);
//     }
//     return numb;
// }
// function cubeFor(numb) {
//     let sum = numb;
//     for (let i = 1; i < 3; i++) {
//         sum *= numb;
//     }
//     return sum;
// }
// console.log( cube(2) );
// console.log(cubeFor(2));


//2)Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

// function sum(...args) {
//     if (args.length > 0) {
//         return args[0] + sum(...args.slice(1));
//     }
//     return 0;
// }
// console.log( sum(1, 2, 3, 4, 5) );

