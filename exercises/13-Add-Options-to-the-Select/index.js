window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	//var x = document.querySelector("#mySelect");
	let largo = countries.length;
	for (let i = 0; i < largo; i++) {
		let option = document.createElement("option");
		option.innerHTML = countries[i];
        document.querySelector("#mySelect").appendChild(option);
        //document.querySelector("#mySelect").append(option);
	}

	// otra opción para cargar lista
	//	var x = document.querySelector("#mySelect");
	//	let largo = countries.length;
	//	for (let i = 0; i < largo; i++) {
	//		let option = document.createElement("option");
	//		option.innerHTML = countries[i];
	//		x.appendChild(option);
	//	}

	// otra opción para cargar lista
	//var x = document.querySelector("#mySelect");
	//let largo = countries.length;
	//for (let i = 0; i < largo; i++) {
	//	let option = document.createElement("option");
	//	option.text = countries[i];
	//	x.add(option);
	//}
};

document.querySelector("#mySelect").addEventListener("change", myFunction);
function myFunction() {
	alert(event.target.value);
}

//otra opción para la alerta
//window.turnChanger = function turnChanger() {
//	alert(event.target.value);
//};
