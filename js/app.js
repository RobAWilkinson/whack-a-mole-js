window.onload = function () {
	var circles = document.getElementsByClassName('hole');

// 1s after load, Mole appears in random hole
function assignMole() {
	var circle = circles[Math.floor(Math.random() * circles.length)];
	circle.style.backgroundImage = "url(mole.png)";
	circle.hasMole = true;
}
setInterval(assignMole,1000);

// if player clicks on that mole he faints and player gains a point

// else he goes back under and misses is greater

// New mole appears

// if misses are 3 then GAME OVER! 





// High Scores?

// Faint streaks?
};