//Задание 1
function min (a, b) {
    if (a < b) {
        return a;
    } else {
     return b;
    } 
}
console.log(min(8, 4));
console.log(min(6,6));

//Задание 2

function isEven(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(isEven(2));
console.log(isEven(3));

//задание 3

function square(number) {
console.log(number ** 2);
} 

const up = (n) => n ** 2;

square(5); 
console.log(up(5));

//задание 4

function userAge() {
    let userAge = +prompt('Сколько тебе лет?');
if (userAge < 0) {
    console.log('Возраст не может быть отрицательным');
} else if (userAge >= 0 && userAge <=12) {
    console.log('Привет друг!');
} else if (userAge >= 13) {    
    console.log('Добро пожаловать!');               
} else {
    console.log('Вы ввели неправильное значение');   
}
}
userAge();

//Задание 5

function calc(a, b) {
   console.log(isNaN(a));
   console.log(isNaN(b));
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';

    } else {
        return a * b;
    }
}
console.log(calc(5, 'o'));

//Задание 6

function getNumber() {
    let number = prompt('Введите число');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';

    } else {
        return `${number} в кубе равняется: ${number ** 3}`;
    }
    
}

console.log(getNumber());

//Задание 7

function getArea () {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * Math.PI * this.radius;
}
const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
const circle2 = {
    radius: 20,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
console.log(circle1.methodGetArea());
console.log(circle1.methodGetArea());
   