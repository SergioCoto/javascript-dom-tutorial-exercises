let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let nuevo = document.createElement("div");
	nuevo.innerHTML = "Hello World";
	nuevo.style.background = "yellow";
	document.body.appendChild(nuevo);
});
