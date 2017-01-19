var amount_of_right_answers = 0;

function givingAnswers(boxId, answer, oneMoreAnswerForSecondQuestion) {
	var userAnswer = document.getElementById(boxId).value;
	userAnswer = userAnswer.toLowerCase();

	if(answer == userAnswer || oneMoreAnswerForSecondQuestion == userAnswer) {
		amount_of_right_answers++;
	}
}
	
function playRiddles() {
	amount_of_right_answers = 0
	givingAnswers("userAnswer1" , "and");
	givingAnswers("userAnswer2" , "coffin" , "a coffin");
	givingAnswers("userAnswer3" , 4);

	alert("Your amount of the right answers: " + amount_of_right_answers);
}