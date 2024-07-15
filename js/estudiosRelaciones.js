var carreras = [
    ['Ingeniería Ambiental', 0],
    ['Ciencias de Datos y Análisis', 0],
    ['Ingeniería de Software', 0],
    ['Gestión Ambiental y Sostenibilidad', 0]
];
var relaciones = [
    ['Ana', 0],
    ['Carlos', 0],
    ['María', 0],
    ['Juan', 0]
];

var historyStack = [];

function obtenerValorNumerico(carreraNombre) {
    // Convertir el nombre de la carrera a minúsculas para asegurar la comparación insensible a mayúsculas
    var nombreBuscado = carreraNombre.toLowerCase();
    
    for (var i = 0; i < carreras.length; i++) {
        // Comparar el nombre de la carrera en minúsculas con el nombre en la posición actual del array
        if (nombreBuscado === carreras[i][0].toLowerCase()) {
            // Si encuentra la coincidencia, retornar el valor numérico
            return carreras[i][1];
        }
    }
    
    // Si no se encuentra ninguna coincidencia, retornar null o algún valor indicativo de no encontrado
    return null;
}

function obtenerValorNumericoRelaciones(nombrePersona) {
    // Convertir el nombre de la persona a minúsculas para asegurar la comparación insensible a mayúsculas
    var nombreBuscado = nombrePersona.toLowerCase();
    
    for (var i = 0; i < relaciones.length; i++) {
        // Comparar el nombre de la persona en minúsculas con el nombre en la posición actual del array
        if (nombreBuscado === relaciones[i][0].toLowerCase()) {
            // Si encuentra la coincidencia, retornar el valor numérico
            return relaciones[i][1];
        }
    }
    
    // Si no se encuentra ninguna coincidencia, retornar null o algún valor indicativo de no encontrado
    return null;
}

function ponerValorNumerio(nombre) {
    // Convertir el nombre a minúsculas para hacer la búsqueda case insensitive
    var lowerCaseNombre = nombre.toLowerCase();

    // Buscar el nombre en el array de carreras
    var found = false;
    carreras.forEach(function(carrera, index) {
        // Convertir el nombre de la carrera actual a minúsculas para la comparación
        var lowerCaseCarrera = carrera[0].toLowerCase();

        // Si el nombre coincide, establecer el valor numérico en 0 y marcar como encontrado
        if (lowerCaseCarrera === lowerCaseNombre) {
            carreras[index][1] = 1;
            found = true;
        }
    });

    // Si no se encontró el nombre en el array de carreras
    if (!found) {
        console.log(`No se encontró la carrera "${nombre}" en la lista.`);
    }
}

function ponerValorNumerioRelaciones(nombrePersona) {
    // Convertir el nombre a minúsculas para hacer la búsqueda case insensitive
    var lowerCaseNombre = nombrePersona.toLowerCase();

    // Buscar el nombre en el array de relaciones
    var encontrado = false;
    relaciones.forEach(function(relacion, index) {
        // Convertir el nombre de la persona actual a minúsculas para la comparación
        var lowerCasePersona = relacion[0].toLowerCase();

        // Si el nombre coincide, establecer el valor numérico en 1 y marcar como encontrado
        if (lowerCasePersona === lowerCaseNombre) {
            relaciones[index][1] = 1;
            encontrado = true;
        }
    });

    // Si no se encontró el nombre en el array de relaciones
    if (!encontrado) {
        console.log(`No se encontró a "${nombrePersona}" en la lista de relaciones.`);
    }
}

function goBack() {
    if (historyStack.length > 0) {
        var lastSection = historyStack.pop();
        document.getElementById(lastSection).style.display = 'none';
    }
}

function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    historyStack.push(sectionId);
}

window.onload = function() {
    showSection('carrera');
};

function showResults(formId, resultId) {
    document.getElementById(resultId).style.display = 'block';
    document.getElementById(formId).style.display = 'none';
    historyStack.push(resultId);
}

function showRandomExampleCarrera() {
    var examples = [
        {
            title: "Ingeniería Ambiental",
            succesPercentage: "85%",
            reasons: [
                "Intereses en la protección del medio ambiente y la sostenibilidad.",
                "Habilidades en matemáticas, ciencias y tecnología.",
                "Demanda laboral creciente en el sector ambiental."
            ]
        },
        {
            title: "Ciencias de Datos y Análisis",
            succesPercentage: "10%",
            reasons: [
                "No hay interés en la programación y el análisis de datos.",
                "Habilidades limitadas en matemáticas y estadísticas.",
                "Mercado laboral saturado y competitivo en el campo de la ciencia de datos."
            ]
        },
        {
            title: "Ingeniería de Software",
            succesPercentage: "30%",
            reasons: [
                "Realmente no te gusta la programación y el desarrollo de software.",
                "Habilidades limitadas en diseño y resolución de problemas.",
                "Mercado laboral altamente competitivo y exigente en ingeniería de software."
            ]
        },
        {
            title: "Gestión Ambiental y Sostenibilidad",
            succesPercentage: "100%",
            reasons: [
                "Intereses en la gestión de recursos naturales y la sostenibilidad.",
                "Habilidades en planificación, organización y liderazgo.",
                "Alta demanda de profesionales en el campo de la gestión ambiental."
            ]
        }
    ];


    updateProgress(steps.length+1);

    examples.sort(function(a, b) {
        return parseInt(b.succesPercentage) - parseInt(a.succesPercentage);
    });

    var container = document.getElementById("carrera-results");
    container.innerHTML = '';

    examples.forEach(function(example, index) {
        var card = document.createElement("div");
        card.className = "card success-" + example.succesPercentage.replace('%', '').trim();
        card.onclick = function() {
            showCardDetails(example);
        };

        var title = document.createElement("div");
        title.className = "card-title";
        title.textContent = example.title;

        var percentage = document.createElement("div");
        percentage.className = "card-percentage";
        percentage.textContent = "Porcentaje de éxito: " + example.succesPercentage;

        card.appendChild(title);
        card.appendChild(percentage);

        container.appendChild(card);
    });

    // Añadir el botón de retroceso al formulario de estudios
    var backButton = document.createElement("button");
    backButton.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;">
            <path d="M15 19l-7-7 7-7"/>
        </svg>
    `;
    backButton.style.position = 'relative';
    backButton.style.top = '10px';
    backButton.style.left = '10px';
    backButton.style.background = 'none';
    backButton.style.border = 'none';
    backButton.style.cursor = 'pointer';
    backButton.style.outline = 'none';
    backButton.addEventListener('click', goBackEstudios);
    container.appendChild(backButton);

    // Desplazar contenido hacia abajo para evitar superposición con el botón de retroceso
    container.style.paddingTop = '50px';

    container.appendChild(backButton);

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
}

function showRandomExampleRelaciones() {
    var examples = [
        {
            compatibility: "90%",
            person: "Juan",
            reasons: [
                "Tipo Relación: Amistad",
                "Intereses y pasatiempos similares.",
                "Comunicación abierta y honesta."
            ],
            events: [
                {
                    title: "Te regalará un libro",
                    date: "01/01/2034"
                },
                {
                    title: "Viaje juntos a la playa",
                    date: "15/07/2034"
                }
            ]
        },
        {
            compatibility: "20%",
            person: "María",
            reasons: [
                "Tipo Relación: Compañeros de trabajo",
                "Diferencias en la comunicación y el estilo de trabajo.",
                "Intereses y objetivos laborales divergentes."
            ],
            events: [
                {
                    title: "Te presentará a un nuevo cliente",
                    date: "10/03/2034"
                }
            ]
        },
        {
            compatibility: "70%",
            person: "Carlos",
            reasons: [
                "Tipo Relación: Pareja",
                "Comunicación efectiva y respetuosa.",
                "Intereses y valores compartidos."
            ],
            events: [
                {
                    title: "Cena romántica",
                    date: "14/02/2034"
                }
            ]
        },
        {
            compatibility: "40%",
            person: "Ana",
            reasons: [
                "Tipo Relación: Amistad",
                "Diferencias en intereses y pasatiempos.",
                "Comunicación limitada y falta de confianza."
            ],
            events: [
                {
                    title: "Te invitará a una fiesta",
                    date: "20/05/2034"
                }
            ]
        }
    ];

    examples.sort(function(a, b) {
        return parseInt(b.compatibility) - parseInt(a.compatibility);
    });

    var container = document.getElementById("relaciones-results");
    
    container.innerHTML = '';
    // Añadir el botón de retroceso al formulario de relaciones
    var backButton = document.createElement("button");
    backButton.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;">
            <path d="M15 19l-7-7 7-7"/>
        </svg>
    `;
    backButton.style.position = 'relative';
    //Colocar el botón en la parte superior izquierda
    backButton.style.top = '10px';
    backButton.style.left = '10px';
    backButton.style.background = 'none';
    backButton.style.border = 'none';
    backButton.style.cursor = 'pointer';
    backButton.style.outline = 'none';
    backButton.addEventListener('click', goBackRelaciones);
    container.appendChild(backButton);
    examples.forEach(function(example, index) {
        var card = document.createElement("div");
        card.className = "card success-" + example.compatibility.replace('%', '').trim();
        card.onclick = function() {
            showCardDetailsRelaciones(example);
        };

        var person = document.createElement("div");
        person.className = "card-title";
        person.textContent = "Persona: " + example.person;

        var compatibility = document.createElement("div");
        compatibility.className = "card-percentage";
        compatibility.textContent = "Compatibilidad: " + example.compatibility;

        card.appendChild(person);
        card.appendChild(compatibility);

        container.appendChild(card);
    });

    

    // Desplazar contenido hacia abajo para evitar superposición con el botón de retroceso
    container.style.paddingTop = '50px';

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
}
function goBackEstudios() {
    // Oculta el contenedor de resultados y el de detalles
    document.getElementById('carrera-results').style.display = 'none';
    document.getElementById('carrera-details').style.display = 'none';
    // Muestra el contenedor de formulario carrera-form
    document.getElementById('carrera-form').style.display = 'block';
    // Elimina el último elemento del historial
    historyStack.pop();
}
function goBackRelaciones() {
    // Oculta el contenedor de resultados y el de detalles
    document.getElementById('relaciones-results').style.display = 'none';
    document.getElementById('relaciones-details').style.display = 'none';
    // Muestra el contenedor de formulario relaciones-form
    document.getElementById('relaciones-form').style.display = 'block';
    // Elimina el último elemento del historial
    historyStack.pop();
}

function showCardDetails(example) {
    var detailsContainer = document.getElementById("carrera-details");
    detailsContainer.innerHTML = '';
    detailsContainer.style.display = 'block';
    detailsContainer.style.position = 'relative'; // Asegurar que el contenedor se posicione correctamente

    var title = document.createElement("h3");
    title.textContent = example.title;

    var percentage = document.createElement("p");
    percentage.textContent = "Porcentaje de éxito: " + example.succesPercentage;

    var reasonsList = document.createElement("ul");
    example.reasons.forEach(function(reason) {
        var listItem = document.createElement("li");
        listItem.textContent = reason;
        reasonsList.appendChild(listItem);
    });

    detailsContainer.appendChild(title);
    detailsContainer.appendChild(percentage);
    detailsContainer.appendChild(reasonsList);

    detailsContainer.style.paddingTop = '50px';
    // Crear el botón SVG con forma de bandera
    var button = document.createElement("button");

    button.id = "save-button";
    button.innerHTML = `
        <svg id="save-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;">
            <path d="M6 4v16l6-6 6 6V4H6z"/>
        </svg>
    `;
    button.style.position = 'absolute';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.background = 'none';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.outline = 'none';

	var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M6 4v16l6-6 6 6V4H6z");

	if (obtenerValorNumerico(example.title)==1){
		button.innerHTML = `
        <svg id="saved" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px; fill: #D04CCC;">
            <path d="M6 4v16l6-6 6 6V4H6z"/>
        </svg>
    `;
	}else{

    button.addEventListener('click', function() {
        var icon = this.querySelector('#save-icon');
        icon.classList.toggle('saved');
	ponerValorNumerio(example.title);
    });
}

    detailsContainer.appendChild(button);

    // Añadir el botón de retroceso al contenedor de detalles
    var backButton = document.createElement("button");
    backButton.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;">
            <path d="M15 19l-7-7 7-7"/>
        </svg>
    `;
    backButton.style.position = 'absolute';
    backButton.style.top = '10px';
    backButton.style.left = '10px';
    backButton.style.background = 'none';
    backButton.style.border = 'none';
    backButton.style.cursor = 'pointer';
    backButton.style.outline = 'none';
    backButton.addEventListener('click', goBack);
    detailsContainer.appendChild(backButton);

    // Añadir detalle de carrera al historial
    historyStack.push("carrera-details");
}

function showCardDetailsRelaciones(example) {
    var detailsContainer = document.getElementById("relaciones-details");
    detailsContainer.innerHTML = '';
    detailsContainer.style.display = 'block';
    detailsContainer.style.position = 'relative'; // Asegurar que el contenedor se posicione correctamente

    var person = document.createElement("h3");
    person.textContent = "Persona: " + example.person;

    var compatibility = document.createElement("p");
    compatibility.textContent = "Compatibilidad: " + example.compatibility;

    var reasonsList = document.createElement("ul");
    example.reasons.forEach(function(reason) {
        var listItem = document.createElement("li");
        listItem.textContent = reason;
        reasonsList.appendChild(listItem);
    });

    var eventsTitle = document.createElement("h4");
    eventsTitle.textContent = "Eventos Futuros";

    var eventsList = document.createElement("ul");
    example.events.forEach(function(event) {
        var eventItem = document.createElement("li");
        eventItem.textContent = event.title + " - " + event.date;
        eventsList.appendChild(eventItem);
    });

    detailsContainer.appendChild(person);
    detailsContainer.appendChild(compatibility);
    detailsContainer.appendChild(reasonsList);
    detailsContainer.appendChild(eventsTitle);
    detailsContainer.appendChild(eventsList);

    // Desplazar contenido hacia abajo para evitar superposición con el botón de retroceso
    detailsContainer.style.paddingTop = '50px';

    
    // Crear el botón SVG con forma de bandera
    var button = document.createElement("button");
    button.id = "save-button";
    button.innerHTML = `
        <svg id="save-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;">
            <path d="M6 4v16l6-6 6 6V4H6z"/>
        </svg>
    `;
    button.style.position = 'absolute';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.background = 'none';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.outline = 'none';

if (obtenerValorNumericoRelaciones(example.person)==1){
		button.innerHTML = `
        <svg id="saved" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px; fill: #D04CCC;">
            <path d="M6 4v16l6-6 6 6V4H6z"/>
        </svg>
    `;
	}else{

    button.addEventListener('click', function() {
        var icon = this.querySelector('#save-icon');
        icon.classList.toggle('saved');
	ponerValorNumerioRelaciones(example.person);
    });
}

    detailsContainer.appendChild(button);

    // Añadir el botón de retroceso al contenedor de detalles
    var backButton = document.createElement("button");
    backButton.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;">
            <path d="M15 19l-7-7 7-7"/>
        </svg>
    `;
    backButton.style.position = 'absolute';
    backButton.style.top = '10px';
    backButton.style.left = '10px';
    backButton.style.background = 'none';
    backButton.style.border = 'none';
    backButton.style.cursor = 'pointer';
    backButton.style.outline = 'none';
    backButton.addEventListener('click', goBack);
    detailsContainer.appendChild(backButton);

    // Añadir detalle de relaciones al historial
    historyStack.push("relaciones-details");
}





function addRelacionesPerfil(example) {
    var detailsContainer = document.getElementById("perfil-relaciones");
    detailsContainer.innerHTML = '';
    detailsContainer.style.display = 'block';
    detailsContainer.style.position = 'relative'; // Asegurar que el contenedor se posicione correctamente

    var person = document.createElement("h3");
    person.textContent = "Persona: " + example.person;

    var compatibility = document.createElement("p");
    compatibility.textContent = "Compatibilidad: " + example.compatibility;

    var reasonsList = document.createElement("ul");
    example.reasons.forEach(function(reason) {
        var listItem = document.createElement("li");
        listItem.textContent = reason;
        reasonsList.appendChild(listItem);
    });

    var eventsTitle = document.createElement("h4");
    eventsTitle.textContent = "Eventos Futuros";

    var eventsList = document.createElement("ul");
    example.events.forEach(function(event) {
        var eventItem = document.createElement("li");
        eventItem.textContent = event.title + " - " + event.date;
        eventsList.appendChild(eventItem);
    });

    detailsContainer.appendChild(person);
    detailsContainer.appendChild(compatibility);
    detailsContainer.appendChild(reasonsList);
    detailsContainer.appendChild(eventsTitle);
    detailsContainer.appendChild(eventsList);

    // Desplazar contenido hacia abajo para evitar superposición con el botón de retroceso
    detailsContainer.style.paddingTop = '50px';

    
    // Crear el botón SVG con forma de bandera
    var button = document.createElement("button");
    button.id = "save-button";
    button.innerHTML = `
        <svg id="save-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;">
            <path d="M6 4v16l6-6 6 6V4H6z"/>
        </svg>
    `;
    button.style.position = 'absolute';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.background = 'none';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.outline = 'none';

		button.innerHTML = `
        <svg id="saved" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px; fill: #D04CCC;">
            <path d="M6 4v16l6-6 6 6V4H6z"/>
        </svg>
    `;

    detailsContainer.appendChild(button);

    // Añadir detalle de relaciones al historial
    historyStack.push("relaciones-details");
}







const steps = document.querySelectorAll('.section-formulario');
  const progressBar = document.getElementById('progress');

  // Función para mostrar el paso actual y actualizar la barra de progreso
  function showStep(stepIndex) {
    if (stepIndex >= steps.length) {
      return; // Evitar índices fuera de rango
    }
	
	document.getElementById('carrera-results').style.display = 'none';
	document.getElementById('carrera-details').style.display = 'none';

    steps.forEach((step, index) => {
      if (index === stepIndex) {
        step.style.display = 'block';
      } else {
        step.style.display = 'none';
      }
    });

    updateProgress(stepIndex + 1);
  }

  // Función para actualizar la barra de progreso
  function updateProgress(progress) {
    const percent = ((progress - 1) / steps.length) * 100;
    progressBar.style.width = percent + '%';
  }

  // Mostrar los resultados al enviar el formulario del paso 3
  function showResults() {
    // Rellenar la barra al 100%
    updateProgress(steps.length+1);
    document.getElementById('carrera-results').style.display = 'block';
    document.getElementById('carrera-details').style.display = 'block';
    // Aquí puedes implementar la lógica para mostrar los resultados finales
  }

  // Mostrar el primer paso al cargar la página
  showStep(0);
