# RG Medium — Propuesta Web Premium (HTML, CSS, JS)

Sitio multipágina para RG Medium orientado a clientes de servicios técnicos con ticket de **$8,000 a $15,000 MXN**.

## Estructura del proyecto

```
rg-medium/
├── index.html        # Home / propuesta de valor
├── servicios.html    # Catálogo + paquetes + FAQ
├── proyectos.html    # Casos de éxito / KPIs
├── contacto.html     # Formulario + canales de atención
├── styles.css        # Sistema visual responsive
├── script.js         # Interacciones + animaciones + formulario
└── INFO/
   └── info.md        # Base de contenido comercial
```

## Qué incluye esta propuesta

- Diseño moderno tipo corporativo técnico (no landing básica).
- Navegación funcional entre **4 páginas**.
- Animaciones premium con **GSAP + ScrollTrigger** (CDN).
- Microinteracciones: barra de progreso de scroll, entrada de secciones, counters animados.
- Menú móvil con control accesible (`aria-expanded`).
- Formulario funcional con persistencia en `localStorage`.
- Media queries robustas para desktop, tablet y móvil.
- Imágenes temáticas de internet (Unsplash) integradas por página.

## Tecnologías

- HTML5 semántico
- CSS3 (variables, grid, flex, responsive)
- JavaScript vanilla
- GSAP + ScrollTrigger vía CDN

## Uso local

1. Abre `index.html` en tu navegador.
2. Navega a `servicios.html`, `proyectos.html` y `contacto.html`.
3. Prueba el formulario en `contacto.html`; las solicitudes quedan guardadas en el navegador.

## Datos de formulario almacenados

Las solicitudes se guardan en la key:

`rgmediumSubmissions`

Estructura ejemplo:

```json
{
  "nombre": "Cliente Demo",
  "empresa": "Negocio XYZ",
  "email": "demo@correo.com",
  "telefono": "9841303765",
  "servicio": "integral",
  "presupuesto": "12.5-15",
  "descripcion": "Necesito remodelación y clima",
  "timestamp": "13/4/2026 18:22:10"
}
```

## Recomendaciones para entrega al cliente

- Sustituir imágenes por fotos reales de trabajos ejecutados.
- Conectar formulario a WhatsApp API, EmailJS o backend propio.
- Agregar dominio y SSL para versión final pública.

---

Actualizado: Abril 2026
