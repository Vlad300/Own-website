function playGuessing() {
	var answer = parseInt(Math.random() * 100);

	while (true) {
		var userAnswer = prompt("Угадайте число от 0 до 100. Чтобы выйти из игры введите 'Выйти'");

		userAnswer = userAnswer.toLowerCase();

		if (userAnswer == "выйти") {
			break;
		}

		userAnswer = parseInt(userAnswer);
			
		if (userAnswer > answer) {
			alert("Ваше число слишком большое.");
		} else if (userAnswer < answer) {
			alert("Ваше число слишком маленькое.");
		} else if (userAnswer == answer) {
			alert("Вы угадали!");
			break;
		} else {
			alert("Необходимо ввести число от 0 до 100!");
		}
	}
}