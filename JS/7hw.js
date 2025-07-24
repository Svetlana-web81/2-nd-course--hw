// Задание 1

const str = 'js';
console.log(str.toUpperCase()); 

// Задание 2

function filterByPrefix(arr, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerPrefix));
}
console.log(filterByPrefix(['Кот', 'Кит', 'котёнок', 'Собака'], 'кот')); 

// Задание 3

const num = 32.58884;
console.log('До меньшего целого:', Math.floor(num));   
console.log('До большего целого:', Math.ceil(num));    
console.log('До ближайшего целого:', Math.round(num)); 

// Задание 4

const numbers = [52, 53, 49, 77, 21, 32];
console.log('Минимальное значение:', Math.min(...numbers)); 
console.log('Максимальное значение:', Math.max(...numbers)); 

// Задание 5

function randomFrom1To10() {
    const random = Math.floor(Math.random() * 10) + 1;
    console.log('Случайное число от 1 до 10:', random);
}
randomFrom1To10();

// Задание 6

function getRandomArray(N) {
    const length = Math.floor(N / 2);
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (N + 1)));
    }
    return result;
}
console.log('Массив случайных чисел:', getRandomArray(10)); 

// Задание 7

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('Случайное число от 5 до 15:', getRandomInRange(5, 15));

// Задание 8

const currentDate = new Date();
console.log('Текущая дата:', currentDate);

// Задание 9

const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log('Дата через 73 дня:', futureDate);

// Задание 10

function formatDate(date) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = days[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const testDate = new Date(); 
console.log(formatDate(testDate));