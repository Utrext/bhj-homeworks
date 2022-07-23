
const timer = document.getElementById("timer");

let timerId;

const countDown = function () {
	
	if(timer.textContent > 0) {
		timer.textContent -= 1;
	} 
	else if(timer.textContent <= 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(timerId);
	}

}

timerId = setInterval(countDown, 1000);