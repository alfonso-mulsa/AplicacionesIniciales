// ***************** Carrusel de fondo *******************
const imagenes = ['./img/fondos/fondo1-byn.jpg', './img/fondos/fondo2-byn.jpg', './img/fondos/fondo3-byn.jpg', './img/fondos/fondo4-byn.jpg'];
var numFondo = 1;
setInterval(cambiarFondo, 5000);

function cambiarFondo() {
    //document.body.style.backgroundImage = "url(" + imagenes[numFondo] + ")";
    $("body").css("background-image", "url(" + imagenes[numFondo] + ")");
    numFondo += 1;
    //console.log(document.body.style.backgroundImage);
    //console.log(numFondo);
    if (numFondo === imagenes.length) { numFondo = 0 };
}

// ***************** Menú ******************
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    //const sidebarWrapper = $('#sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    //const menuToggle = $('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call($('#sidebar-wrapper'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        });
    });

    function _toggleMenuIcon() {
        const menuToggleBars = $('.menu-toggle > .fa-bars');
        const menuToggleTimes = $('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    $(document).scroll(() => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    });
});

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

// ***************** Ventana modal de registro ******************
$("#btnValidarDatos").click(validarDatosRegistro);
function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}
function validarDatosRegistro() {
    let nombre = $("#inputNombre").val();
    let fechaNacimiento = $("#inputFechaNacimiento").val();
    let sexo = $("#inputSexo").val();
    let direccion = $("#inputDireccion").val();
    let email = $("#inputEmail").val();
    //console.log("Nombre: " + nombre + "\n" + "Fecha nacimiento: <" + fechaNacimiento + ">\n" + "Sexo: " + sexo + "\n" + "Dirección: " + direccion + "\n" + "e-mail: " + email);

    // Validar nombre
    let validarNombre = /^[ÁÉÍÓÚÜA-Z][a-záéíóúü]+(\s+[ÁÉÍÓÚÜA-Z]?[a-záéíóúü]+)*$/;
    if (!validarNombre.test(nombre)) {
        window.alert("El nombre '" + nombre + "' no es válido.");
        return false;
    }
    // Validar fecha de nacimiento
    if (fechaNacimiento == "") {
        window.alert("Debe de introducir una fecha de nacimiento.");
        return false;
    }
    // Comprobar si es mayor de edad
    let edad = calcularEdad(fechaNacimiento);
    if (edad < 18) {
        window.alert("Eres menor de edad.");
        return false;
    }
    // Validar sexo
    if (sexo == "Elige una opción...") {
        window.alert("Debe de elegir una opción en el campo 'Sexo'.");
        return false;
    }
    // Validar dirección
    if (direccion == "") {
        window.alert("Debe introducir una dirección válida.");
        return false;
    }
    // Validar email
    let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validarEmail.test(email)) {
        window.alert("La dirección de correo '" + email + "' no es válida.");
        return false;
    }
    // Datos correctos
    window.alert("Los datos introducidos son correctos.\n" + "Nombre: " + nombre + "\n" + "Fecha nacimiento: <" + fechaNacimiento + ">\n" + "Sexo: " + sexo + "\n" + "Dirección: " + direccion + "\n" + "e-mail: " + email)
    $('#ventanaRegistro').modal('hide');
}
