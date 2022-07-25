
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

function getHole(index) {
	return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
	
	let game = getHole(i);
  
	game.onclick = function () {
		
		let holeContains = getHole(i).className.includes("hole_has-mole");
	 
		if(holeContains)
			dead.textContent++;
		else 
			lost.textContent++;
			
		if(dead.textContent == 10) {
			alert("Вы выиграли!");
			dead.textContent = 0;
			lost.textContent = 0;
		} 
		else if (lost.textContent == 5) {
			alert("Вы проиграли!");
			dead.textContent = 0;
			lost.textContent = 0;
		}
	}
}