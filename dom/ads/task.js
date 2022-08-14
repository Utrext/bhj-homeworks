const rotator = document.querySelectorAll(".rotator");

for (let i = 0; i < rotator.length; i++) {
	
	let ads = rotator[i].querySelector(".rotator__case");
	
	const showNext = () => {
		if(ads.classList.contains("rotator__case_active")) {
			ads.classList.remove("rotator__case_active");
		};
		
		ads = ads.nextElementSibling;
		
		if(ads == null) {
			ads = rotator[i].querySelector(".rotator__case");
		};
		
		ads.classList.add("rotator__case_active");
		
	}
	
	setInterval(showNext, 1000);
}