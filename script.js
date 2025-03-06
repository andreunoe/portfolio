window.onload = function() {
  let menuToggle = document.getElementById("menu-toggle");
  let menu = document.getElementById("lista-menu");

  // Verifica si los elementos están presentes
  if (menuToggle && menu) {
    console.log("Elementos encontrados, agregando evento...");
    
    // Evento para mostrar/ocultar el menú al hacer clic en el botón
    menuToggle.addEventListener("click", function(event) {
      menu.classList.toggle("show");
      console.log("Menú toggleado");
      event.stopPropagation(); // Evita que el clic se propague al documento
    });

    // Evento para ocultar el menú si se hace clic fuera
    document.addEventListener("click", function(event) {
      if (!menu.contains(event.target) && event.target !== menuToggle) {
        menu.classList.remove("show");
        console.log("Menú ocultado");
      }
    });
  } else {
    console.log("Elementos no encontrados en esta página");
  }
};

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Agregar el evento de clic
menuToggle.addEventListener('click', () => {
  // Alternar la visibilidad del menú
  //lista-menu.classList.toggle('show');
  
  // Alternar la rotación del icono
  menuToggle.classList.toggle('open');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('header img.logo-web');
    
    // Si el desplazamiento es mayor a 50px, cambia el estilo
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Añade la clase para cambiar el fondo y texto
        logo.src = 'logo2.png';
    } else {
        header.classList.remove('scrolled'); // Elimina la clase cuando se vuelve a la parte superior
        logo.src = 'logo.png'; 
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); // Al cargar, hace fade-in
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el cambio inmediato
        document.body.classList.add('fade-out'); // Aplica fade-out
        setTimeout(() => {
          window.location.href = this.href; // Cambia de página después del efecto
        }, 500); // Tiempo de la transición
      });
    });
});

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

function showDescription(id) {
  document.querySelectorAll('.description').forEach(desc => desc.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  toggleDescription('defaultMessage'); // Asegúrate de usar un ID adecuado para el primer mensaje visible
});

function toggleDescription(id) {
  // Ocultar todos los elementos con la clase 'description'
  document.querySelectorAll('.description2').forEach(desc => {
    desc.style.display = 'none'; // Oculta todos los mensajes
  });
  document.querySelectorAll('.description').forEach(desc => {
    desc.style.display = 'none'; // Oculta todos los mensajes
  });
  
  // Mostrar el mensaje específico con el id proporcionado
  document.getElementById(id).style.display = 'block';
}

// Mostrar el primer mensaje por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  toggleDescription('defecto'); // Asegúrate de usar el ID adecuado para el primer mensaje visible
});

document.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated"); // Activa la animación
          observer.unobserve(entry.target); // Detiene la observación
        }
      });
    },
    { threshold: 0.5 } // Se activa cuando el 50% del elemento es visible
  );

  observer.observe(document.getElementById("typing-container"));
});
