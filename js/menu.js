var sesionActual = {
    nombre: '',
    email: 'x',
    estudios: [], // Inicializa como un array vacío
    relaciones: [] // Inicializa como un array vacío
};

document.addEventListener('DOMContentLoaded', function() {
    var btnIniciarSesion = document.getElementById('btnIniciarSesion');
    var overlay1 = document.querySelector('.overlay1');

    btnIniciarSesion.addEventListener('click', function() {
      overlay1.style.display = 'block';
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var btnIniciarSesion = document.getElementById('btnIniciarSesion2');
    var overlay1 = document.querySelector('.overlay1');

    btnIniciarSesion.addEventListener('click', function() {
      overlay1.style.display = 'block';
    });
  });


document.addEventListener('DOMContentLoaded', function() {
  var btnCerrarSesion = document.getElementById('btnCerrarSesion'); // Asigna un ID al botón de cerrar sesión
  var overlay1 = document.querySelector('.overlay1');

  btnCerrarSesion.addEventListener('click', function() { // Agrega un evento al botón de cerrar sesión
    overlay1.style.display = 'none'; // Oculta la ventana de inicio de sesión
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var btnAbrirRegistro = document.getElementById('btnAbrirRegistro'); // Asigna un ID al botón de cerrar sesión
  var overlay1 = document.querySelector('.overlay1');
  var overlay2 = document.querySelector('.overlay2');

  btnAbrirRegistro.addEventListener('click', function() { // Agrega un evento al botón de cerrar sesión
    overlay1.style.display = 'none'; // Oculta la ventana de inicio de sesión
    overlay2.style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var btnAbrirRegistro = document.getElementById('pasosAbrirRegistro'); // Asigna un ID al botón de cerrar sesión
  var overlay2 = document.querySelector('.overlay2');

  btnAbrirRegistro.addEventListener('click', function() { // Agrega un evento al botón de cerrar sesión
    overlay2.style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var btnAbrirRegistro = document.getElementById('menuAbrirRegistro'); // Asigna un ID al botón de cerrar sesión
  var overlay2 = document.querySelector('.overlay2');

  menuAbrirRegistro.addEventListener('click', function() { // Agrega un evento al botón de cerrar sesión
    overlay2.style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var btnCerrarRegistro = document.getElementById('btnCerrarRegistro'); // Asigna un ID al botón de cerrar sesión
  var overlay2 = document.querySelector('.overlay2');

  btnCerrarRegistro.addEventListener('click', function() { // Agrega un evento al botón de cerrar sesión
    overlay2.style.display = 'none'; // Oculta la ventana de inicio de sesión
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var btnVolverSesion = document.getElementById('btnVolverSesion'); // Asigna un ID al botón de cerrar sesión
  var overlay1 = document.querySelector('.overlay1');
  var overlay2 = document.querySelector('.overlay2');

  btnVolverSesion.addEventListener('click', function() { // Agrega un evento al botón de cerrar sesión
    overlay1.style.display = 'block'; // Oculta la ventana de inicio de sesión
    overlay2.style.display = 'none';
  });
});

function actualizarPerfil(nombre, email) {
    // Seleccionar los elementos por su ID
    var nombreElemento = document.getElementById('nombrePerfil');
    var emailElemento = document.getElementById('emailPerfil');
    
    // Actualizar el contenido de los elementos
    nombreElemento.textContent = nombre;
    emailElemento.textContent = email;
  }

//Manejar registros
(function($) {

	"use strict";

	var user_data = {
	    "users": []
	};

	$(document).ready(function(){
	    $("#registroForm").submit(function(event) {
	        event.preventDefault(); // Evita el envío del formulario por defecto
	        var nombre = $("#registroNombre").val().trim();
	        var email = $("#registroEmail").val().trim();
	        var password = $("#registroPass").val().trim();

	        // Validar que se hayan ingresado datos
	        if (nombre === '' || email === '' || password === '') {
	            alert('Por favor ingresa nombre, email y contraseña.');
	            return;
	        }

	        // Guardar usuario en la estructura de datos
	        new_user_json(nombre, email, password);

	        sesionActual.nombre=nombre;
		sesionActual.email=email;
		actualizarPerfil(nombre,email);
		mostrarPerfil();

	        $("#registroNombre").val('');
	        $("#registroEmail").val('');
	        $("#registroPass").val('');
	    });
	});

	// Añadir un nuevo usuario a la estructura de datos
	function new_user_json(nombre, email, password) {
	    var user = {
	        "nombre": nombre,
	        "email": email,
	        "password": password
	    };
	    user_data["users"].push(user);
	    console.log(user_data); // Mostrar los datos en la consola para verificar
	}

})(jQuery);

// Obtener referencia al enlace de perfil y la sección de perfil
const perfilLink = document.getElementById('abrirPerfil');
const perfilSection = document.getElementById('perfil');
const salirPerfilSection = document.getElementById('volverAtras');

var seccionActual = 'inicio';

function mostrarInicio() {
  if (seccionActual === 'inicio') {
	window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
  } else {
  document.querySelectorAll('.section').forEach(function(section) {
    section.style.display = 'none';
  });
  document.getElementById('inicio').style.display = 'block';
  seleccionarSeccion('inicio'); // Resalta el enlace de la sección "Inicio"
  scrollToTop();
  seccionActual = 'inicio';
  }
}

function mostrarEstudios() {
  if (seccionActual === 'estudios') {
	window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
  } else {
  document.querySelectorAll('.section').forEach(function(section) {
    section.style.display = 'none';
  });
  document.getElementById('estudios').style.display = 'block';
  seleccionarSeccion('estudios');
  scrollToTop();
  seccionActual = 'estudios';
  }
}

function mostrarRelaciones() {
  if (seccionActual === 'relaciones') {
  window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
  } else {
  document.querySelectorAll('.section').forEach(function(section) {
    section.style.display = 'none';
  });
  document.getElementById('relaciones').style.display = 'block';
  seleccionarSeccion('relaciones');
  scrollToTop();
  seccionActual = 'relaciones';
  }
}

function seleccionarSeccion(seccionId) {
  // Remover la clase selected de todos los enlaces
  document.querySelectorAll('.list-inline-item a').forEach(function(item) {
    item.classList.remove('selected-item');
  });

  // Agregar la clase selected-item al enlace de la sección seleccionada
  var enlaceSeccion = document.querySelector(`.list-inline-item a[href="#${seccionId}"]`);
  if (enlaceSeccion) {
    enlaceSeccion.classList.add('selected-item');
  }
}

function scrollToTop() {
            window.scrollTo(0, 0); // Desplazamiento inmediato a la parte superior
        }

function scrollToAyuda() {
	document.querySelector('.container-menu').style.display = 'block';
  document.getElementById('inicio').style.display = 'block';
  perfilSection.style.display = 'none';
  seleccionarSeccion('inicio');
  seccionActual = 'inicio';

            setTimeout(() => {
            const middleHeight = document.documentElement.scrollHeight * 5 / 8;
            window.scrollTo({
                top: middleHeight,
                behavior: 'smooth'
            });
        }, 100)
        }

function scrollToInicio() {
  if (seccionActual !== 'inicio') {
    mostrarInicio();
  }
  scrollToAyuda();
}

document.addEventListener('DOMContentLoaded', function() {
  var listItems = document.querySelectorAll('.list-inline-item a');

  listItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetId);

      // Oculta todas las secciones
      document.querySelectorAll('.section').forEach(function(section) {
        section.style.display = 'none';
      });

      // Muestra la sección seleccionada
      targetSection.style.display = 'block';
    });
  });
});

function aumentarTamañoFuente() {
  var elemento1 = document.querySelector('.future'); // Selecciona el elemento con la clase "ai"
  elemento1.style.fontSize = '30px'; // Establece el tamaño de fuente en 30px
  var elemento2 = document.querySelector('.ai'); // Selecciona el elemento con la clase "ai"
  elemento2.style.fontSize = '30px'; // Establece el tamaño de fuente en 30px
}

function reducirTamañoFuente() {
  var elemento1 = document.querySelector('.future'); // Selecciona el elemento con la clase "ai"
  elemento1.style.fontSize = '24px'; // Establece el tamaño de fuente en 30px
  var elemento2 = document.querySelector('.ai'); // Selecciona el elemento con la clase "ai"
  elemento2.style.fontSize = '24px'; // Establece el tamaño de fuente en 30px
}

document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.menu');

  // Función para toggle del menú
  function toggleMenu() {
    menu.classList.toggle('active');
  }

  // Función para cerrar el menú si se hace clic fuera de él
  function closeMenuOnClickOutside(event) {
    var isClickInsideMenu = menu.contains(event.target);
    var isClickOnMenuToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuToggle) {
      menu.classList.remove('active');
    }
  }

  // Event listener para abrir/cerrar menú al hacer clic en el toggle
  menuToggle.addEventListener('click', toggleMenu);

  // Event listener para cerrar menú al hacer clic fuera de él
  document.addEventListener('click', closeMenuOnClickOutside);
});

document.addEventListener('DOMContentLoaded', (event) => {
            const toggleButton = document.getElementById('toggleDarkMode');
		const icon = toggleButton.querySelector('i');
            
            // Verificar si el modo oscuro ya está habilitado
            if (localStorage.getItem('darkMode') === 'enabled') {
                document.body.classList.add('dark-mode');
            }

            toggleButton.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');

                // Guardar la preferencia del usuario en localStorage
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('darkMode', 'enabled');
                } else {
                    localStorage.setItem('darkMode', 'disabled');
                }

		// Toggle entre el ícono de luna (fa-moon) y sol (fa-sun)
    if (icon.classList.contains('fa-moon')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
            });
        });








function ocultarTodo() {
  document.querySelectorAll('.overlay').forEach(function(element) {
    element.style.display = 'none';
  });

  document.querySelector('.container-menu').style.display = 'none';
  document.querySelectorAll('.section').forEach(function(element) {
    element.style.display = 'none';
  });
}

function mostrarPerfil() {
  // Evitar comportamiento por defecto del enlace (evitar recargar la página)
  event.preventDefault();

  ocultarTodo();

  // Mostrar la sección de perfil
  perfilSection.style.display = 'block';
}

// Agregar evento de clic al enlace de perfil
perfilLink.addEventListener('click', function(event) {
  if (sesionActual.email=='x'){
	document.getElementById('avisoRegistro').style.display = 'block';
}else{
  mostrarPerfil();
}
});

function salirPerfil() {
  document.querySelector('.container-menu').style.display = 'block';
  document.getElementById(seccionActual).style.display = 'block';
  perfilSection.style.display = 'none';
  seleccionarSeccion(seccionActual);
  scrollToTop();
}

salirPerfilSection.addEventListener('click', function(event) {
  salirPerfil();
});

function cerrarAviso() {
	document.getElementById('avisoRegistro').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  var btnVolverSesion = document.getElementById('btnAvisoSesion'); // Asigna un ID al botón de cerrar sesión
  var overlay1 = document.querySelector('.overlay1');
  var overlay3 = document.querySelector('.overlay3');

  btnVolverSesion.addEventListener('click', function() { // Agrega un evento al botón de cerrar sesión
    overlay1.style.display = 'block'; // Oculta la ventana de inicio de sesión
    overlay3.style.display = 'none';
  });
});