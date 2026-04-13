# RG Medium - Página Web Simple

Página web profesional para RG Medium (Infraestructura y Soluciones Técnicas) sin dependencias externas.

## 📂 Estructura

```
RG-MEDIUM-SIMPLE/
├── index.html       (Página única con toda la estructura)
├── styles.css       (Estilos CSS puro)
├── script.js        (JavaScript vanilla)
└── README.md        (Este archivo)
```

## 🚀 Cómo Usar

1. **Abrir localmente:**
   - Descarga los archivos
   - Abre `index.html` directamente en tu navegador
   - No requiere servidor ni instalación

2. **Subir a hosting:**
   - Sube los 3 archivos a tu servidor
   - Accede por HTTP/HTTPS
   - Funciona en cualquier hosting estático

## ✨ Características

- ✅ **Sin dependencias** - Solo HTML, CSS, JavaScript puro
- ✅ **Responsive** - Funciona en desktop, tablet, móvil
- ✅ **Diseño profesional** - Tema oscuro con acentos dorados
- ✅ **Navegación suave** - Enlaces con scroll automático
- ✅ **Formulario funcional** - Datos guardados en localStorage
- ✅ **SEO básico** - Meta tags y estructura semántica
- ✅ **Performance** - Carga instantánea sin compilación

## 📋 Secciones

1. **Header** - Logo, navegación fija
2. **Hero** - Propuesta de valor, CTA, estadísticas
3. **Servicios** - 6 tarjetas con ofertas principales
4. **Capacidades** - Puntos diferenciadores y precios
5. **Contacto** - Formulario y información de contacto
6. **Footer** - Año dinámico

## 🎨 Tema

- **Color primario:** Dorado (#d4af37)
- **Fondo:** Azul oscuro (#0a0e27)
- **Acento:** Rojo (#ff6b6b)
- **Tipografía:** Segoe UI, sans-serif

## 🔧 Personalización

### Cambiar Colores
Edita las variables en `styles.css`:
```css
:root {
  --primary: #d4af37;    /* Dorado */
  --dark: #0a0e27;       /* Azul oscuro */
  --accent: #ff6b6b;     /* Rojo */
}
```

### Cambiar Contenido
- Edita el texto directo en `index.html`
- Cambia los servicios en la sección `.services-grid`
- Personaliza la información de contacto

### Cambiar Estilos
- Modifica `styles.css` según necesites
- Usa las clases existentes para mantener consistencia

## 📱 Responsive

- Desktop: 1200px máximo
- Tablet: 768px breakpoint
- Móvil: Stack vertical automático

## 🔐 Formulario

El formulario guarda datos en `localStorage` del navegador para demo.

**Para producción, integra con:**
- Formspree
- EmailJS
- Tu backend personalizado

## 📊 Plantilla de Contacto

Estructura del objeto enviado:
```javascript
{
  nombre: "Juan Pérez",
  empresa: "Tech Solutions",
  email: "juan@example.com",
  telefono: "+52 555 123 4567",
  servicio: "climatizacion",
  descripcion: "Necesito instalar...",
  urgencia: "normal",
  timestamp: "13/04/2026 14:30:00"
}
```

## 🌐 Despliegue

### Opción 1: GitHub Pages (Gratis)
```bash
git init
git add .
git commit -m "RG Medium"
git remote add origin https://github.com/TU_USUARIO/rg-medium.git
git push -u origin main
```

### Opción 2: Netlify (Gratis)
Arrastra la carpeta a netlify.com

### Opción 3: Servidor Propio
Sube los 3 archivos por FTP

## ✅ Checklist Pre-Lanzamiento

- [ ] Cambiar teléfono de ejemplo
- [ ] Cambiar email de contacto
- [ ] Cambiar ubicación
- [ ] Revisar ortografía
- [ ] Probar en móvil
- [ ] Probar formulario
- [ ] Cambiar colores si lo deseas
- [ ] Agregar logo personalizado (opcional)

## 📝 Licencia

Libre para usar comercialmente.

---

**Creado:** Abril 2026
**Última actualización:** Abril 2026
