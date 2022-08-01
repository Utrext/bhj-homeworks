const menuLink = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuLink.length; i++) {
	
	const menu = menuLink[i];
	const subMenu = menu.closest(".menu__item").querySelector(".menu_sub");
	  
	menu.onclick = () => {
		subMenu.style.display = "block";
		return false;		
	}
	  
	if(!subMenu) {
		continue;
	}
	
	subMenu.style.display = "none";
	
} 