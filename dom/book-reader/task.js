const book = document.getElementById("book");
const fontSize = document.querySelectorAll(".font-size");

for (let i = 0; i < fontSize.length; i++) {
	
	const fontSizeChange = fontSize[i];
	
	fontSizeChange.addEventListener("click", (e) => {
		let fontSizeActive = document.querySelector(".font-size_active");
		
		e.preventDefault();
		
		fontSizeActive.classList.remove("font-size_active");
		e.target.classList.add("font-size_active");
		
		const changingFont = (fontSizeChange) => {
			
			if(fontSizeChange == "small") {
				book.className = "book_fs-small";
			} else if(fontSizeChange == "big") {
				book.className = "book_fs-big";
			} else {
				book.className = "book";
			}
			
		}
		
		changingFont(e.target.dataset.size);
		
	})
};