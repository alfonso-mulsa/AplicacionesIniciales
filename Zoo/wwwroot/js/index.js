$(document).ready(function(){
	$('.cabecera').height($(window).height());
})

function updateEdad(val) {

	document.getElementById('txt_edad').textContent=val; 
}

function validarDatos() {
	let nombre = document.getElementById('id_nombre').value;
	let password = document.getElementById('id_password').value;
	let edad = document.getElementById('id_edad').value;
	let categoria = document.getElementById('id_categoria').value;
	console.log('Nombre: <' + nombre + '>');
	console.log('Contraseña: <' + password + '>');
	console.log('Edad: <' + edad + '>');
	console.log('Categoría: <' + categoria + '>');
	if (nombre == '') {
		window.alert('Debe de introducir un nombre.');
		return;
	}

	if (password == '') {
		window.alert('Debe de introducir una contraseña.');
		return;
	}

	if (categoria == '') {
		window.alert('Debe de seleccionar una categoría válida.');
		return;
	}

	window.alert('Datos introducidos correctos:\n' + 'Nombre: ' + nombre + '\n' + 'Edad: ' + edad + '\n' + 'Categoría: ' + categoria);
}