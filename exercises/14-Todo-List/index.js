// Your code here

// Para eliminar líneas

// Your code here
let y = document.querySelector("ul");

y.addEventListener("click", e => {
	const targetElem = e.target.parentNode;
	if (targetElem.nodeName === "SPAN") {
		//console.log(targetElem.parentNode);
		y.removeChild(targetElem.parentNode);
	} else {
		//console.log(targetElem);
		y.removeChild(targetElem);
	}
});

// Para agregar líneas
var input = document.getElementById("addToDo");
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		let valor = document.getElementById("addToDo").value;
		//let list = document.querySelector("ul");
		document.querySelector("ul");
		let nuevo = document.createElement("LI");
		nuevo.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + valor;
		document.querySelector("ul").appendChild(nuevo);
		document.getElementById("addToDo").value = "";
	}
});
