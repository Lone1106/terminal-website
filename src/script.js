const textContainter = document.getElementById("terminal__main");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function createText(text) {
	const p = document.createElement("p");
	p.setAttribute("class", "linespace");
	p.innerHTML = text;
	textContainter.appendChild(p);
}

function clearChilds() {
	textContainter.innerHTML = "";
}

function newLine() {
	const p = document.createElement("p");
	const span1 = document.createElement("span");
	const span2 = document.createElement("span");
	span1.textContent = "user@guest";
	span2.textContent = " ~ %";
	p.appendChild(span1);
	p.appendChild(span2);
	textContainter.appendChild(p);
}

function createInputLine() {
	const p = document.createElement("p");
	const span = document.createElement("span");
	const inp = document.createElement("input");
	p.setAttribute("class", "linespace");
	span.setAttribute("class", "prompt");
	span.innerHTML = "user@guest ~ %";
	p.appendChild(span);
	p.appendChild(inp);
	textContainter.appendChild(p);
}

async function startup() {
	await delay(300);
	createText("Connecting to server. . .");
	await delay(300);
	createText("Loading database. . . ");
	await delay(300);
	clearChilds();
	await delay(300);
	createInputLine();
}

startup();