function playTwoPlayerGuessing() {
	var answer = parseInt(Math.random() * 100);
	
	while (true) {
		var user1Answer = prompt("Игрок 1: Угадайте число от 0 до 100. Чтобы выйти из игры введите 'Выйти'");
		var user2Answer = prompt("Игрок 2: Ваша очередь угадывать число. Чтобы выйти из игры введите 'Выйти'");
	
		user1Answer = user1Answer.toLowerCase();
		user2Answer = user2Answer.toLowerCase();
	
		if (user1Answer == "выйти" && user2Answer != "выйти") {
			alert("Игрок 2: Ваш соперник сдался. Вы выиграли!");
			break;
		} else if (user2Answer == "выйти" && user1Answer != "выйти") {
			alert("Игрок 1: Ваш соперник сдался. Вы выиграли!");
			break;
		} else if (user1Answer == "выйти" && user2Answer == "выйти") {
			alert("Ничья");
			break;
		}
	
		user1Answer = parseInt(user1Answer);
		user2Answer = parseInt(user2Answer);
			
		if (user1Answer > answer && user2Answer > answer) {
			alert("Ваши числа слишком большие.");
		} else if (user1Answer < answer && user2Answer < answer) {
			alert("Ваши числа слишком маленькие.");
		} else if (user1Answer == answer && user2Answer == answer) {
			alert("Ничья. Вы обое угадали!");
			break;
		} else if (user1Answer > answer && user2Answer < answer) {
 			alert("Игрок 1: Ваше число слишком большое. Игрок 2: Ваше число слишком маленькое");
 		} else if (user1Answer < answer && user2Answer > answer) {
 			alert("Игрок 1: Ваше число слишком маленькое. Игрок 2: Ваше число слишком большое");
 		} else if (user1Answer == answer && user2Answer != answer) {
 			alert("Игрок 1: Вы угадали!");
 			break;
 		} else if (user1Answer != answer && user2Answer == answer) {
 			alert("Игрок 2: Вы угадали!");
 			break;
 		} else {
 			alert("Необходимо ввести число от 0 до 100!");
 		}
	}
}