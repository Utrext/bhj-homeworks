const chatWidget = document.querySelector(".chat-widget");
const chatWidgetInput = document.getElementById("chat-widget__input");
const messages = document.getElementById("chat-widget__messages");

const random = () => {
	const answers = [
		"Царь во дворца, ходи то, делай сюда...",
		"Клиентоориентированность - наш конёк!",
		"Ваша позиция в очереди: 789",
		"Вы спросили, мы проигнорировали",
		"Директор в отпуске, завхоз на проводе",
		"Мы ничего вам не продадим, не звоните нам больше!",
	];
  
    return answers[Math.floor(Math.random() * answers.length)];
}

chatWidget.addEventListener("click", () => {
  chatWidget.classList.add("chat-widget_active");
})

chatWidget.addEventListener("keydown", (event) => {
	
	const time = new Date().toLocaleDateString() + " " + new Date().getHours() + ":" + new Date().getMinutes();  
	const message = chatWidgetInput.value;
	
	if(event.key === "Enter" && event.target.value !== "") {
		
		messages.innerHTML +=
		
			`<div class='message message_client'>
				<div class='message__time'> ${time} </div>
				<div class='message__text'> ${message} </div>
			</div>
			<div class='message'>
				<div class='message__time'> ${time} </div>
				<div class='message__text'>	${random()}	</div>
			</div>`;

		chatWidgetInput.value = "";	
	}
})