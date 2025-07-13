//Задание 1
for (let i = 0; i < 2; i++) {
console.log('Привет!');
}

//Задание 2
for (let i = 1; i <= 5; i++) {
console.log(i);
}

//Задание 3
for (let i = 7; i <= 22; i++) {
console.log(i);
}

//Задание 4
const obj = {
  nic: '200',
  vasya: '300',
  pety: '400'
}

for (const key in obj) {
     console.log(`${key} - ${obj[key]} долларов`);
}

//Задание 5
let n = 1000;
let num5 = 0;

while (n >=50) {
    n /=2;
    console.log(n);
    num5++;
}
console.log(`Количество циклов: ${num}`);

//Задание 6
let deyFridey = 5;

let allDay = 31;

for (let i = deyFridey; i < allDay; i+= 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);   
}


    

   


