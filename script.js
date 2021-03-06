/* Find the penguin game: Chapter 11 */

// this script will run a function that will generated a random number and that number will represent which DIV the Yeti hides in. This DIV will get an id of "yeti" and also the click event listener.

// event listener to run the game function when the page loads
window.addEventListener("load", newGame);

// event listener on the "play again" button to restart the game
document.getElementById("button").addEventListener("click", function() { window.location.reload()
});
// function definition of the newGame() function
function newGame() {
	// generate a random integer between 2 and 10
	var randNum = Math.floor(Math.random() * 9) + 2;
	// build of collection of <divs>, use the random number to select one and add the yeti ID to that element
	document.getElementsByTagName("div")[randNum].setAttribute("id", "yeti");
	// add event listener to the div that NOW has an id of 'yeti'
	document.getElementById("yeti").addEventListener("click", function() { window.alert("ROWRR! You found the Yeti, you lose!");
		document.getElementById("sound").play();

	});
}