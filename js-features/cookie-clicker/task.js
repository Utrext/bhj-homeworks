
const img = document.getElementById("cookie");
const click = document.getElementById("clicker__counter");

function changeSize () {
	
	if(img.width === 300) 
		img.width = 200;
	else 
		img.width = 300;
	
	click.textContent++;
}

img.onclick = changeSize;