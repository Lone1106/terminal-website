const textContainter = document.getElementById("terminal__main");
const area = document.getElementById("area");
const year = document.querySelector(".year");

// SET STUFF ON LOAD
window.onload = () => {
	startup();
	area.focus();
};

// EVENT LISTENERS
document.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		let data = getInput();
		actOnInput(data);
		clearInput();
	}
});

area.addEventListener("keyup", () => {
	const label = document.querySelector(".cursor");
	label.textContent = area.value;
});

// DIVERSE FUNCTIONS
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function getInput() {
	const data = area.value;
	return data;
}

async function clearInput() {
	const label = document.querySelector(".cursor");
	await delay(150);
	area.value = "";
	label.innerHTML = "";
}

function createText(text) {
	const field = document.getElementById("textfield");
	const p = document.createElement("p");
	p.setAttribute("class", "linespace");
	p.innerHTML = text;
	field.appendChild(p);
}

function clearChilds() {
	textContainter.innerHTML = "";
}

function resetTerminal() {
	textContainter.innerHTML = "";
	addTextField();
	createInputLine();
}

function newLine() {
	const field = document.getElementById("textfield");
	const p = document.createElement("p");
	const span1 = document.createElement("span");
	const span2 = document.createElement("span");
	span1.textContent = "user@guest";
	span2.textContent = " ~ %";
	p.appendChild(span1);
	p.appendChild(span2);
	field.appendChild(p);
}

function createInputLine() {
	const p = document.createElement("p");
	const span = document.createElement("span");
	const label = document.createElement("label");
	p.setAttribute("class", "linespace");
	span.setAttribute("class", "prompt");
	label.setAttribute("class", "cursor");
	label.setAttribute("for", "area");
	span.innerHTML = "user@guest ~ %";
	p.appendChild(span);
	p.appendChild(label);
	textContainter.appendChild(p);
}

function createError(text) {
	const field = document.getElementById("textfield");
	const p = document.createElement("p");
	p.setAttribute("class", "linespace error");
	p.innerHTML = text;
	field.appendChild(p);
}

function addTextField() {
	const field = document.createElement("div");
	field.setAttribute("id", "textfield");
	textContainter.appendChild(field);
}

async function startup() {
	addTextField();
	await delay(300);
	createText("Connecting to server. . .");
	await delay(300);
	createText("Loading database. . . ");
	await delay(300);
	clearChilds();
	addTextField();
	await delay(300);
	createText("type help for all commands");
	await delay(300);
	createInputLine();
}

// HANDLE INPUTS
function actOnInput(inp) {
	switch (inp) {
		case "help":
			createText("All commands: help, clear, about, projects, links");
			break;
		case "clear":
			resetTerminal();
			break;
		default:
			createError("Command not defined! Check ? for all commands!");
			break;
	}
}
