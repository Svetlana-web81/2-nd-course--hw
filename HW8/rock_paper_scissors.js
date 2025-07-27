function rockPaperScissors() {
    const choices = ["камень", "ножницы", "бумага"];
    let userChoice = prompt("Выберите: камень, ножницы или бумага?");

    // Преобразуем ввод пользователя в нижний регистр
    userChoice = userChoice.toLowerCase();

    if (!choices.includes(userChoice)) {
        alert("Некорректный ввод. Пожалуйста, выберите камень, ножницы или бумага.");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    alert(`Вы выбрали: ${userChoice}`);
    alert(`Компьютер выбрал: ${computerChoice}`);

    let result = "";

    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    alert(result);
}

