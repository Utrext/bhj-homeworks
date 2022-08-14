const reveal = document.querySelectorAll(".reveal");

document.addEventListener("scroll", () => {
	for (let i = 0; i < reveal.length; i++) {
		const adv = reveal[i];
		const top = adv.getBoundingClientRect().top;
		const bottom = adv.getBoundingClientRect().bottom;
		
		if(top < this.innerHeight && top > 0 || bottom < this.innerHeight && bottom > 0) {
			adv.classList.add("reveal_active");
		} else {
			adv.classList.remove("reveal_active");
		}
	}
})