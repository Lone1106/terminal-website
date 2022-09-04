const textContainter = document.getElementById("terminal__main");
const area = document.getElementById("area");
const year = document.querySelector(".year");
const container = document.querySelector(".container");

const lineDelay = 150;
let started = false;

// SET STUFF ON LOAD
window.onload = () => {
	startup();
	area.focus();
};

// EVENT LISTENERS
container.addEventListener("click", () => {
	area.focus();
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		// DELETE INFO LINE AFTER FIRST COMMAND
		if (!started) {
			resetTerminal();
			started = true;
		}

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

function scrollToBottom () {
	let terminal = document.querySelector(".terminal");
  terminal.scrollTop = terminal.scrollHeight;
}

// CLEAR FUNCTIONS
async function clearInput() {
	const label = document.querySelector(".cursor");
	await delay(50);
	area.value = "";
	label.innerHTML = "";
}
function clearChilds() {
	textContainter.innerHTML = "";
}

function resetTerminal() {
	textContainter.innerHTML = "";
	addTextField();
	createInputLine();
}

// CREATE ELEMENT FUNCTIONS
function createText(text) {
	const field = document.getElementById("textfield");
	const p = document.createElement("p");
	p.setAttribute("class", "linespace");
	p.innerHTML = text;
	field.appendChild(p);
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

function createLink(text, link) {
	const field = document.getElementById("textfield");
	const p = document.createElement("p");
	const span = document.createElement("span");
	const a = document.createElement("a");
	p.setAttribute("class", "linespace");
	a.setAttribute("href", link);
	a.setAttribute("class", "socialLink");
	a.setAttribute("target", "_blank");
	a.innerHTML = text;
	a.appendChild(span);
	p.appendChild(a);
	field.appendChild(p);
}

function createInfoLine(type, text) {
	const field = document.getElementById("textfield");
	const p = document.createElement("p");
	const span1 = document.createElement("span");
	const span2 = document.createElement("span");
	const span3 = document.createElement("span");
	p.setAttribute("class", "linespace");
	span1.setAttribute("class", "infoType");
	span2.setAttribute("class", "infoText");
	span3.setAttribute("class", "spaceholder");
	span1.innerHTML = type;
	span2.innerHTML = text;
	span3.innerHTML = "~";
	p.appendChild(span1);
	p.appendChild(span3);
	p.appendChild(span2);
	field.appendChild(p);
}

function createHeader(text) {
	const field = document.getElementById("textfield");
	const h3 = document.createElement("h3");
	h3.setAttribute("class", "linespace");
	h3.innerHTML = text;
	field.appendChild(h3);
}
// CREATE SECTIONS
async function startup() {
	addTextField();
	await delay(lineDelay);
	createText("Connecting to server. . .");
	await delay(lineDelay);
	createText("Loading database. . . ");
	await delay(lineDelay);
	clearChilds();
	addTextField();
	await delay(lineDelay);
	createText("type 'help' for all commands");
	await delay(lineDelay);
	createInputLine();
}

async function help() {
	await delay(lineDelay);
	createHeader("Commands");
	await delay(lineDelay);
	createInfoLine("help", "display all available commands");
	await delay(lineDelay);
	createInfoLine("clear", "clear the console of all in- and output");
	await delay(lineDelay);
	createInfoLine("about", "gets info about owner of the page");
	await delay(lineDelay);
	createInfoLine("projects", "take a look at the owners projects");
	await delay(lineDelay);
	createInfoLine("links", "get links for the owners social media");
	await delay(lineDelay);
	scrollToBottom();
}

async function about() {
	await delay(lineDelay);
	createHeader("About");
	await delay(lineDelay);
	createInfoLine("Name", "Name goes here");
	await delay(lineDelay);
	createInfoLine("Location", "Location goes here");
	await delay(lineDelay);
	createInfoLine("Age", "21");
	await delay(lineDelay);
	createInfoLine("Occupation", "Job name goes here");
	await delay(lineDelay);
	createInfoLine("Skills", "HTML, CSS/SASS, JS, React, Python, Adobe AI/PS");
	await delay(lineDelay);
	createInfoLine(
		"Languages",
		"German(N), English(C2), Japanese(B1), Spanish(A1)"
	);
	await delay(lineDelay);
	createInfoLine("Hobbies", "Reading, coding, tennis, meeting with friends");
	await delay(lineDelay);
	scrollToBottom();
}

async function projects() {
	await delay(lineDelay);
	createHeader("Projects");
	await delay(lineDelay);
	createText("Terminal Portfolio website");
	createLink("view on Github", "https://github.com/Lone1106/terminal-website");
	createLink("live preview", "https://www.google.de/");
	await delay(lineDelay);
	createText("React Flashcard Appliation");
	createLink("view on Github", "https://github.com/Lone1106/flashcard-app");
	createLink("live preview", "https://www.google.de/");
	await delay(lineDelay);
	scrollToBottom();
}

async function links() {
	await delay(lineDelay);
	createHeader("Links");
	await delay(lineDelay);
	createLink("GitHub", "https://github.com/Lone1106");
	await delay(lineDelay);
	createLink("LinkedIn", "https://www.linkedin.com/");
	await delay(lineDelay);
	scrollToBottom();
}

// HANDLE INPUTS
function actOnInput(inp) {
	switch (inp) {
		case "help":
			help();
			break;
		case "clear":
			resetTerminal();
			break;
		case "about":
			about();
			break;
		case "projects":
			projects();
			break;
		case "links":
			links();
			break;
		default:
			createError("Command not defined! Check 'help' for all commands!");
			break;
	}
}
