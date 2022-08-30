
const inputChecked = document.querySelectorAll(".interest__check");

for (let checked of inputChecked) {
    
	checked.addEventListener("change", function (e) {
        
		let counter = 0;
        
		if (this.closest("ul.interests_active") == null) {
            
			for (let input of this.closest("li.interest").querySelectorAll(".interest__check")) {
                
				if (e.target.checked == false) {
                    input.checked = false;
                } else {
                    input.checked = true;
                }
            }
        } else {
            
			for (let input of this.closest("ul.interests").querySelectorAll(".interest__check")) {
                
				if (input.checked == true) {
                    counter++;
                }
            }
            
			if (counter == this.closest("ul.interests").children.length) {
                this.closest("ul.interests").closest("li.interest").querySelector("input").checked = true;
            } else {
                this.closest("ul.interests").closest("li.interest").querySelector("input").checked = false;
            }
        }
    })
}