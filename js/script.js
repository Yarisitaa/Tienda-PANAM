// --- 1. MENÚ LATERAL (Se mantiene igual) ---
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("activo");
}

// Opcional: Cerrar el menú al hacer click en cualquier enlace
const menuLinks = document.querySelectorAll(".menu-links a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("activo");
    });
});

// --- 2. CARRUSEL DE TARJETAS EXPANDIBLES (UNIFICADO) ---
const panels = document.querySelectorAll('.panel');
const prevBtn = document.querySelector('.controles-carrusel .prev');
const nextBtn = document.querySelector('.controles-carrusel .next');
let currentActive = 0; // Índice de la tarjeta activa por defecto

// Función principal para cambiar la tarjeta activa
function setActiveSlide(index) {
    // Manejo de límites del índice
    if (index >= panels.length) {
        currentActive = 0;
    } else if (index < 0) {
        currentActive = panels.length - 1;
    } else {
        currentActive = index;
    }

    // 1. Quitamos la clase 'active' de todas las tarjetas
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    // 2. Añadimos la clase 'active' a la tarjeta actual
    panels[currentActive].classList.add('active');
}

// --- EVENTOS DE INTERACCIÓN ---

// Evento: Clic directo en cualquier tarjeta (para expandirla)
panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        setActiveSlide(index);
    });
});

// Evento: Clic en el botón Siguiente
nextBtn.addEventListener('click', () => {
    setActiveSlide(currentActive + 1);
});

// Evento: Clic en el botón Anterior
prevBtn.addEventListener('click', () => {
    setActiveSlide(currentActive - 1);
});

// --- 3. AUTO-PLAY (Cambio automático cada 5 segundos) ---
let autoSlideInterval = setInterval(() => {
    setActiveSlide(currentActive + 1);
}, 5000);

// Opcional: Detener el auto-play al interactuar con el carrusel
const carruselSection = document.querySelector('.slider');
carruselSection.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval); // Detiene el cambio automático
});

carruselSection.addEventListener('mouseleave', () => {
    // Reinicia el cambio automático
    autoSlideInterval = setInterval(() => {
        setActiveSlide(currentActive + 1);
    }, 5000);
});

function toggleSubmenu() {
    const submenu = document.getElementById("submenu-productos");
    const icono = document.getElementById("icono-plus");

    // Alternar la clase 'abierto'
    submenu.classList.toggle("abierto");

    // Cambiar el icono de + a -
    if (submenu.classList.contains("abierto")) {
        icono.textContent = "-";
    } else {
        icono.textContent = "+";
    }
}

function toggleSubmenu(event) {
    // Evitamos que el click afecte a otros elementos
    event.stopPropagation(); 
    
    const submenu = document.getElementById("submenu-productos");
    const icono = document.getElementById("icono-plus");

    // Si tiene la clase 'abierto' se la quita, si no, se la pone
    submenu.classList.toggle("abierto");
    
    // Giramos el icono +
    icono.classList.toggle("rotar-mas");
}

function suscribirUsuario() {
    const emailInput = document.getElementById("email-club");
    const mensaje = document.getElementById("mensaje-confirmacion");

    // Verificamos que el campo no esté vacío y tenga formato de correo
    if (emailInput.value.includes("@") && emailInput.value.includes(".")) {
        
        // 1. Ocultamos el área de input para dar efecto de "completado"
        document.querySelector(".suscribirse-area").style.display = "none";
        
        // 2. Mostramos el mensaje de éxito
        mensaje.style.display = "block";
        mensaje.style.color = "#4CAF50"; // Un verde éxito que resalte en el fondo oscuro
        
        // Opcional: Limpiar el input
        console.log("Correo registrado: " + emailInput.value);
    } else {
        alert("Por favor, ingresa un correo electrónico válido.");
    }
}

document.getElementById('form-newsletter').addEventListener('submit', function(e) {
    // Nota: Si usas Formspree, ellos redirigen a su propia página de gracias. 
    // Este script es para mostrar el mensaje si decides usar AJAX o solo como aviso.
    const mensaje = document.getElementById('confirmacion-club');
    const contenedor = document.querySelector('.suscribirse-diseno');
    
    // Mostramos el aviso de actualizaciones
    setTimeout(() => {
        contenedor.style.display = 'none';
        mensaje.style.display = 'block';
    }, 500); 
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    // Añade o quita la clase active para que el menú entre o salga
    menu.classList.toggle("active");
}

function toggleSubmenu(event) {
    // Evita que el clic en el '+' recargue la página si está dentro de un link
    event.preventDefault();
    const submenu = document.getElementById("submenu-productos");
    const icono = document.getElementById("icono-plus");

    // Cambia entre mostrar y ocultar el submenú
    submenu.classList.toggle("show");

    // Cambia el icono de + a - cuando se abre
    if (submenu.classList.contains("show")) {
        icono.innerText = "-";
    } else {
        icono.innerText = "+";
    }
}