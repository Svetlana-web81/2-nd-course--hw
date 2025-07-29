// Задание 1
const heading1 = document.querySelector('#heading1');
const toggleButton = document.querySelector('#toggleButton');

toggleButton.addEventListener('click', () => {
    if (heading1.style.display === 'none') {
        heading1.style.display = 'block'; 
    } else {
        heading1.style.display = 'none'; 
    }
});

// Задание 2
const paragraph1 = document.querySelector('#paragraph1');
const colorButton = document.querySelector('#colorButton');

colorButton.addEventListener('click', () => {
    paragraph1.style.color = 'blue'; 
    
});

// Задание 3
const heading2 = document.querySelector('#heading2');
const changeTextButton = document.querySelector('#changeTextButton');

changeTextButton.addEventListener('click', () => {
    heading2.textContent = 'Привет, мир!'; 
});

// Задание 4: Поиск и изменение элементов по классу
const descriptionElClass = document.querySelectorAll('.description');
        const changeBtn = document.querySelector('#change_btn');
        
        changeBtn.addEventListener('click', () => {

            descriptionElClass.forEach(element => {
                element.textContent = 'Измененный текст';
            });
        });

// Задание 6: Добавление нового элемента в DOM

const addButton = document.querySelector('#addButton');

addButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p'); // Создаем новый элемент <p>
    newParagraph.textContent = 'Новый абзац'; // Задаем текст для нового абзаца
    document.body.appendChild(newParagraph); // Добавляем новый абзац в конец <body>
});

// Задание 7: Удаление элемента
const removeButton = document.querySelector('#removeButton');

removeButton.addEventListener('click', () => {
    const firstDescription = document.querySelector('.description'); // Находим первый элемент с классом 'description'
    if (firstDescription) {
        firstDescription.remove(); // Удаляем найденный элемент
    }
});
