const textContainter = document.getElementById("terminal__main");

function createTextLine(text) {
	const p = document.createElement("p");
	p.classList.add("space");
	p.innerHTML = `<span class="prompt">user@current ~ %</span> ${text}`;
	textContainter.appendChild(p);
}

function createInputLine() {
	const div = document.createElement("div");
	div.classList.add("space");
	div.innerHTML = `
						<span class="prompt">user@current ~ %</span>
						<input minlength="1" class="prompt__input" type="text" />
					`;
	textContainter.appendChild(div);
}

function lineTimer(func) {
	const interval = setInterval(() => {
		func();
		clearInterval(interval);
	}, 500);
}

function getInputValue() {
	const prompt = document.querySelector(".prompt__input");
	console.log(prompt.value);
	prompt.value = "";
}

textContainter.addEventListener("keydown", (e) => {
	if (e.key === "Enter") getInputValue();
});
