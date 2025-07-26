function rockPaperScissors() {
    const choices = ["камень", "ножницы", "бумага"];
    const userChoice = prompt("Выберите: камень, ножницы или бумага?");

    if (!choices.includes(userChoice)) {
        alert("Некорректный ввод. Пожалуйста, выберите камень, ножницы или бумагу.");
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
