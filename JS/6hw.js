//Задание 1
const myArray = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    
    if (myArray[i] === 10) {
        break;
    }
}

//Задание 2

const array = new Array(1, 5, 4, 10, 0, 3);
console.log(array);
let numberValue = array.indexOf(4);
console.log(`Индекс значения "четыре" в массиве: ${numberValue}`);

//Задание 3

const newArray = [1, 3, 5, 10, 20];
console.log(newArray.join(' '));

//Задание 4

let arr = [];

for (let index = 0; index < 3; index++) {
   let insertArr = [];
  
        for (let i = 0; i < 3; i++) {
            insertArr.push(1);
        }
        
  arr.push(insertArr);      
}

console.log(arr);

//Задание 5

const anotherArray = [1, 1, 1];
anotherArray.push(2, 2, 2);
console.log(anotherArray);


//Задание 6

const toSortArray = [9, 8, 7, 'a', 6, 5];
// Удаляем 'a'
const filtered = toSortArray.filter(item => item !== 'a');
// Сортируем по убыванию
const sorted = filtered.sort((a, b) => b - a);
console.log(sorted); // [9, 8, 7, 6, 5]


//Задание 7

const numberArray = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt("Введите число!"));
if (numberArray.includes(userAnswer)) {
    console.log("Угадал");
} else {
    console.log("Не угадал");
}

//Задание 8

const text = 'abcdef';
const splitText = text.split('');
console.log(splitText);
console.log(splitText.reverse().join(''));

//Задание 9

const numberArr = [[1, 2, 3],[4, 5, 6]];
const simpleArr = numberArr.flat();
console.log(simpleArr);

//Задание 10

const randomArray = [];
let randomNum;
for (let k = 0; k < 10; k++) {
   randomNum = Math.floor(Math.random() * 10 + 1);
   randomArray.push(randomNum);
        
} 
console.log(randomArray);

for (let j = 0; j < randomArray.length - 1; j++) {
    console.log(randomArray[j] + randomArray[j + 1]);
}

//Задание 11

function squred(newArr) {
    return newArr.map(item => item ** 2);
}

console.log(squred([1, 2, 3]));

//Задание 12

function getLength(params) {
    return params.map(item => item.length);
}
console.log(getLength(["Hi", "World"])); // [2, 5]

//Задание 13

function negativeNumbers(array){
    return array.filter(item => item < 0);
}

console.log(negativeNumbers([1, 2, 3, -4, 5, -6,  7, 8, 9, 10]));

//Задание 14

const randomArr = [];
        const newNumArr = [];       
        for (let m = 0; m < 10; m++) {
           randomArr.push(Math.floor(Math.random() * 10));
                if (randomArr[m] % 2 === 0) {
                        newNumArr.push(randomArr[m]);
                }
        } 
        console.log(randomArr);
        console.log(newNumArr);

//Задание 15

function myRandomNum() {
            return Math.floor(Math.random() * 10 + 1);
            
        }
        
        const newRandomArr = [];     

        for (let q = 0; q < 6; q++) {
          newRandomArr.push(myRandomNum());
        }

        console.log(newRandomArr);
        const sum = newRandomArr.reduce((addition, number) => addition + number, 0);
        console.log(`Средне арифметическое равно: ${Math.round(sum / newRandomArr.length)}`);





