 var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var guessed_letters = [];

var letters_to_guess = null;

var guesses_left = 9;

var wins = 0;

var losses = 0;


var compguess = letters[Math.floor(Math.random() * letters.length)];

var showguessleft = function() {
	document.querySelector('#guesses_left').innerHTML = "Guesses left: " + guesses_left;
};

var newlettersguess = function() {
	this.letters_to_guess = this.compguess[Math.floor(Math.random() * this.compguess.length)];
};

var wrongguess = function(){
	document.querySelector('#wrong').innerHTML = "You've guessed so far: " + guessed_letters.join(',');
};

var reset = function(){
	totalguesses = 9;
	guesses_left = 9;
	guessed_letters = [];

	showguessleft();
	newlettersguess();
	wrongguess();
}

	newlettersguess();
	wrongguess();

document.onkeyup = function(event) {
	guesses_left--;
 	var yourguess = String.fromCharCode(event.keyCode).toLowerCase();

 	guessed_letters.push(yourguess);
	showguessleft();
 	wrongguess();

 	if (guesses_left > 0){
 		if (yourguess == letters_to_guess){
 			wins++;
 			document.querySelector('#wins').innerHTML = "Wins: " + wins;
 			reset();
 		}
 	}
 	else if(guesses_left == 0){
 		losses++;
 		document.querySelector('#losses').innerHTML = "Losses: " + losses;
 		reset();

 	}

};




