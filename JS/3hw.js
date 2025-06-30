//Задание 1
let password = `пароль`;
let userPass = prompt (`Введите пароль`);
if (userPass === password) {
    alert(`Пароль введен верно`);
} else {
    alert(`Пароль введен неверно`);
}

//Задание 2
let c = 5;
if(c > 0 && c > 10){
    alert(`Верно`);
} else {
    alert(`Неверно`);
}

//Задание 3
let d = 200;
let e = 50;
if(d > 100 || e > 100) {
    console.log(`Верно`);
}else {
    console.log(`Неверно`);
}

//Задание 4
let f = `2`;
let b = `3`;
alert(+a + +f);

//Задание 5
let monthNumber = 12;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert(`Зима`);
        break;
    case 3:
    case 4:
    case 5:
        alert(`Весна`);
        break;
    case 6:
    case 7:
    case 8:
        alert(`Лето`);
        break;
    case 9:
    case 10:
    case 11:
        alert(`Осень`);
        break;
        default:
            if (monthNumber > 13) {
                console.log(`Ошибка: номер месяца должен быть меньше или равен 12`);
            }



}

