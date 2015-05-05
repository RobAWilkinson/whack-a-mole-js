window.onload = function () {
	var circles = document.getElementsByClassName('hole');
	var player = {
		points: 0,
		misses: 0
	}
// 1s after load, Mole appears in random hole
function assignMole() {
	var circle = circles[Math.floor(Math.random() * circles.length)];
	circle.style.backgroundImage = "url(mole.png)";
	circle.hasMole = true;
}

var moleInterval = setInterval(assignMole,1000);

// if player clicks on that mole he faints and player gains a point
	for(var i = 0; i < circles.length; i++) {
		var circle = circles[i];
		console.log(circle);
		circle.addEventListener('click', function() {
			console.log("clicked");
			if(this.hasMole === true) {
				this.hasMole = false;
				player.points++;
				this.style.backgroundImage = "";
				this.style.backgroundColor = "burlywood";
			}
			document.getElementById('points').innerHTML = player.points;
			window.clearInterval(moleInterval);
			moleInterval = setInterval(assignMole, 1000 - (player.points *10))
		});
	}

// else he goes back under and misses is greater

// New mole appears

// if misses are 3 then GAME OVER! 





// High Scores?

// Faint streaks?
};