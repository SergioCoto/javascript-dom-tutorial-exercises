let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {

	document.querySelector("#myList");
	let nuevo = document.createElement("LI");
	nuevo.innerHTML = "Fourth element";
    document.querySelector("#myList").appendChild(nuevo);
    
    	let node = document.createElement("LI");
		let textnode = document.createTextNode("Fifth element");
		node.appendChild(textnode);
		document.querySelector("#myList").appendChild(node);


});
