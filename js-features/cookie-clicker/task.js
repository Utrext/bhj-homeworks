
const img = document.getElementById("cookie");
const click = document.getElementById("clicker__counter");

function changeSize () {
	
	img.width = img.width === 300 ? 200 : 300;

	click.textContent++;
}

img.onclick = changeSize;