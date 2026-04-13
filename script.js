// ==================== NAVEGACIÓN ACTIVA ====================
document.addEventListener('DOMContentLoaded', () => {
  updateActiveNavLink();
  setFooterYear();
  setupFormHandler();
});

window.addEventListener('scroll', updateActiveNavLink);

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').substring(1);
    if (href === current) {
      link.classList.add('active');
    }
  });
}

// ==================== FOOTER AÑO ====================
function setFooterYear() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// ==================== FORMULARIO ====================
function setupFormHandler() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Recolectar datos
    const formData = {
      nombre: document.getElementById('nombre').value,
      empresa: document.getElementById('empresa').value,
      email: document.getElementById('email').value,
      telefono: document.getElementById('telefono').value,
      servicio: document.getElementById('servicio').value,
      descripcion: document.getElementById('descripcion').value,
      urgencia: document.querySelector('input[name="urgencia"]:checked').value,
      timestamp: new Date().toLocaleString('es-MX')
    };

    // Guardar en localStorage (simulación de envío)
    const submissions = JSON.parse(localStorage.getItem('rgmediumSubmissions') || '[]');
    submissions.push(formData);
    localStorage.setItem('rgmediumSubmissions', JSON.stringify(submissions));

    // Mensaje de confirmación
    alert(`¡Gracias, ${formData.nombre}!\n\nHemos recibido tu solicitud.\nNos pondremos en contacto en las próximas 24 horas.\n\nEmail: ${formData.email}`);

    // Limpiar formulario
    form.reset();
  });
}

// ==================== SCROLL SUAVE ====================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Actualizar nav activa
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});

// ==================== EFECTO HOVER EN BOTONES ====================
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
  });
});

// ==================== CARGAR AÑO AL INICIAR ====================
window.addEventListener('load', () => {
  setFooterYear();
});

console.log('✅ RG Medium - Script cargado correctamente');
