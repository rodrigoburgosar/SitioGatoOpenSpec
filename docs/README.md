# 🐱 Sitio de Gatos

Un hermoso sitio web interactivo que muestra razas de gatos, galería de fotos, consejos de cuidado e información divertida. Construido con HTML, CSS y JavaScript vanilla con soporte completo de modo oscuro.

**Powered by TheCatAPI** 🐱 - Datos en vivo de razas y fotos de gatos

## ✨ Características

- **Razas de Gatos**: Información detallada sobre razas desde TheCatAPI
- **Galería Interactiva**: Explora fotos hermosas de gatos con visor modal
- **Consejos de Cuidado**: Consejo experto sobre nutrición, salud, aseo y comportamiento
- **Datos Curiosos**: Hechos fascinantes sobre gatos
- **Modo Oscuro**: Alterna entre temas claro y oscuro con persistencia de preferencia
- **Completamente Responsivo**: Diseño mobile-first que funciona en todos los dispositivos
- **Accesible por Teclado**: Navegación completa por teclado y soporte para lectores de pantalla
- **Sin Dependencias**: HTML, CSS y JavaScript vanilla, sin frameworks necesarios
- **API TheCatAPI Integrada**: Datos en vivo de razas y fotos de gatos

## 🚀 Inicio Rápido

### Desarrollo Local

1. **Navega a la carpeta del proyecto:**
   ```bash
   cd web/
   ```

2. **Inicia un servidor local:**
   ```bash
   # Usando Python 3:
   python -m http.server 8000
   
   # O usando Python 2:
   python -m SimpleHTTPServer 8000
   
   # O usando Node.js (http-server):
   npx http-server
   
   # O usando Ruby:
   ruby -run -ehttpd . -p8000
   ```

3. **Abre tu navegador:**
   - Navega a `http://localhost:8000/`
   - Para ver contenido específico, visita:
     - `http://localhost:8000/` - Sitio completo
     - `http://localhost:8000/index.html` - Referencia explícita del archivo

4. **¡Disfruta!** 🎉
   - Explora las razas de gatos
   - Haz clic en imágenes de la galería para ver tamaño completo
   - Alterna el modo oscuro con el icono de luna/sol
   - Prueba la navegación por teclado (Tab, Flechas, Escape)

## 📁 Estructura del Proyecto

```
web/
├── index.html           # Archivo HTML principal
├── styles.css           # CSS con variables de tema y diseño responsivo
├── scripts.js           # JavaScript para interactividad
├── .env                 # Variables de entorno (API KEY - NO COMPARTIR)
├── images/              # Directorio de imágenes
│   └── cats/            # Fotos de gatos para la galería
├── README.md            # Este archivo
└── .gitignore           # Archivos a ignorar en Git (incluye .env)
```

## 🔐 Configuración de API (TheCatAPI)

### API Key Segura

La API key de TheCatAPI está almacenada en:
- Archivo `.env` (ignorado por Git - consulta `.gitignore`)
- Variables en `scripts.js` (para desarrollo local)

**⚠️ IMPORTANTE:** El archivo `.env` **nunca** debe ser commiteado a Git.

### Cambiar la API Key

1. Abre `web/.env`:
   ```env
   VITE_CAT_API_KEY=tu_nueva_clave_aqui
   VITE_CAT_API_URL=https://api.thecatapi.com/v1
   ```

2. Abre `web/scripts.js` y actualiza:
   ```javascript
   const API_KEY = 'tu_nueva_clave_aqui';
   ```

3. Guarda los cambios
4. Recarga la página en tu navegador

### Obtener tu propia API Key

1. Visita [TheCatAPI.com](https://thecatapi.com/)
2. Regístrate para una cuenta gratuita
3. Obtén tu API key desde el panel de control
4. Reemplaza la clave en tu proyecto

### Sobre TheCatAPI

- **Documentación**: https://docs.thecatapi.com/
- **Límites**: Plan gratuito permite 100,000 requests/mes
- **Datos**: Razas, fotos y características de gatos en vivo

## 🎨 Tema Oscuro/Claro

El sitio usa propiedades CSS personalizadas (variables) para temas fáciles de personalizar:

- **Modo Claro**: Fondo blanco limpio con texto oscuro (por defecto)
- **Modo Oscuro**: Fondo oscuro con texto claro

### Persistencia de Tema
Tu preferencia de tema se guarda en `localStorage` del navegador y se restaura cuando regreses.

### Cambiar Tema
Haz clic en el icono de sol/luna en el encabezado para alternar entre temas claro y oscuro. La preferencia se guarda automáticamente.

### Preferencia del SO
Si visitas por primera vez, el sitio respeta la configuración de modo oscuro de tu sistema operativo.

## 🖼️ Uso de la Galería

### Ver Imágenes
- **Haz clic** en cualquier miniatura para abrir la vista de tamaño completo
- **Haz clic** en flechas anterior/siguiente para navegar
- **Usa teclas de flecha** (←/→) para navegar con teclado
- **Presiona Escape** o haz clic fuera del modal para cerrar
- **Desliza** izquierda/derecha en dispositivos móviles/tablet (soporte de gestos opcional)

### Imágenes en Vivo desde TheCatAPI
Las imágenes de la galería se cargan automáticamente desde TheCatAPI al iniciar el sitio. **No es necesario agregar imágenes manualmente.**

Para agregar imágenes locales adicionales (opcional):
1. Coloca archivos de imagen en `web/images/cats/` directorio
2. Las imágenes de TheCatAPI aparecerán automáticamente

### Consejos de Optimización de Imágenes
- Usar formato JPEG para fotos (tamaño más pequeño)
- Usar PNG para imágenes con transparencia
- Mantener tamaños de archivo de imagen bajo 500KB
- Usar nombres descriptivos en los archivos

## ⌨️ Navegación por Teclado

- **Tab**: Navega a través de enlaces y botones
- **Enter/Espacio**: Activa botones y enlaces
- **Teclas de Flecha** (en galería): Navega entre imágenes (← anterior, → siguiente)
- **Escape** (en galería): Cierra el modal

## 📱 Diseño Responsivo

El sitio es completamente responsivo con diseños optimizados para:

- **Móvil** (< 480px): Una columna, navegación compacta con menú hamburguesa
- **Tablet** (480px - 1024px): Diseño de dos columnas, cuadrícula responsiva
- **Escritorio** (> 1024px): Diseño multicolumna con navegación completa

Prueba responsividad mediante:
1. Abriendo DevTools (F12 o clic derecho → Inspeccionar)
2. Haciendo clic en el botón de alternancia de dispositivo (esquina superior izquierda)
3. Seleccionando diferentes dispositivos o redimensionando el viewport

## 🌐 Despliegue

### GitHub Pages

1. **Crea un repositorio de GitHub** (si no existe):
   ```bash
   git init
   git add .
   git commit -m "Agregar sitio de gatos integrado con TheCatAPI"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

2. **Habilita GitHub Pages:**
   - Ve a configuración del repositorio **Configuración** → **Páginas**
   - En "Origen", selecciona rama **main** y directorio **/(raíz)**
   - Haz clic en **Guardar**

3. **Accede a tu sitio:**
   - Tu sitio estará disponible en: `https://TU_USUARIO.github.io/TU_REPO/`
   - Puede tomar unos minutos para compilar e implementar

### ⚠️ Nota de Seguridad para Producción

**Para despliegue en producción (GitHub Pages, Netlify, etc.):**
- La API key está actualmente en el código JavaScript (visible públicamente)
- Para máxima seguridad, implementa un servidor backend que maneje las solicitudes a TheCatAPI
- Backend debe servir la API key de forma segura (variables de entorno del servidor)

**Alternativas seguras:**
1. Usar un servidor backend (Node.js, Python, etc.)
2. Usar Netlify Functions o AWS Lambda para proxificar solicitudes API
3. Implementar CORS proxy seguro

### Otras Plataformas de Hosting

El sitio funciona en cualquier hosting estático:
- **Netlify**: Arrastra y suelta la carpeta `web/`
- **Vercel**: Conecta tu repositorio de GitHub
- **AWS S3**: Sube archivos y habilita hosting de sitio web estático
- **Tu propio servidor**: Copia archivos al directorio del servidor web

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en la parte superior de `styles.css`:

```css
:root {
    --color-accent: #ff6b6b;  /* Cambiar color primario */
    --color-bg: #ffffff;      /* Cambiar fondo */
    --color-text: #333333;    /* Cambiar color de texto */
    /* ... más variables ... */
}
```

### Cambiar Título del Sitio
- Edita `<title>` en `index.html` (título de pestaña del navegador)
- Edita `.logo` texto (encabezado)
- Edita encabezamientos de sección hero

### Cambiar Contenido de Secciones
Todos los contenidos principales están en `index.html`. Encuentra la sección que deseas editar y modifica el HTML directamente.

### Añadir más razas
Las razas se cargan automáticamente desde TheCatAPI. Cambia el límite en `scripts.js`:
```javascript
const response = await fetch(`${API_URL}/breeds?limit=10`, ...
// Cambia 10 a otro número
```

### Añadir más fotos
Las fotos se cargan automáticamente desde TheCatAPI. Cambia el límite en `scripts.js`:
```javascript
const response = await fetch(`${API_URL}/images/search?limit=20`, ...
// Cambia 20 a otro número
```

## ✅ Lista de Verificación de Pruebas

Antes de desplegar, verifica:

- [ ] Todas las imágenes se cargan correctamente
- [ ] El alternador de tema oscuro funciona
- [ ] Las imágenes de la galería se abren y se pueden navegar
- [ ] El alternador de menú móvil funciona
- [ ] La navegación por teclado funciona (Tab, Flechas, Escape)
- [ ] El contraste de texto es legible en ambos modos
- [ ] Sin errores de consola (DevTools → Consola)
- [ ] Los enlaces funcionan y apuntan a secciones correctas
- [ ] El diseño responsivo funciona en múltiples tamaños de pantalla
- [ ] TheCatAPI carga razas e imágenes correctamente

## 🎯 Consejos de Rendimiento

- Las imágenes de TheCatAPI están optimizadas automáticamente
- Total de CSS + JS debe mantenerse bajo 100KB
- Ejecuta auditoría de Lighthouse regularmente (DevTools → Lighthouse)
- Apunta a puntuaciones de Lighthouse: Rendimiento ≥85, Accesibilidad ≥90

Para verificar rendimiento:
1. Abre DevTools (F12)
2. Haz clic en pestaña **Lighthouse**
3. Haz clic en **Analizar carga de página**

## 🌍 Soporte de Navegadores

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Navegadores móviles (iOS Safari, Chrome Mobile)

**No soportado:**
- Internet Explorer 11 e inferior
- Navegadores Android muy antiguos

## 🐛 Solución de Problemas

### Las imágenes no se cargan
- Verifica que TheCatAPI es accesible (https://api.thecatapi.com)
- Comprueba la API key en `scripts.js`
- Mira DevTools → Pestaña Red para errores 404
- Verifica la consola del navegador para mensajes de error

### El tema oscuro no se guarda
- Verifica que localStorage está habilitado en tu navegador
- Intenta limpiar caché del navegador y cookies
- Mira DevTools → Aplicación → Local Storage

### El menú móvil no funciona
- Verifica que `scripts.js` está cargado (DevTools → Pestaña Red)
- Mira DevTools → Consola para errores de JavaScript

### El modal de galería no se abre
- Asegúrate de que las imágenes de TheCatAPI se cargan correctamente
- Verifica que `scripts.js` está cargado
- Mira la consola del navegador para errores

### Errores de CORS con TheCatAPI
- TheCatAPI soporta CORS, pero verifica tu API key es válida
- Si despliegas en producción, considera un proxy backend

## 📄 Licencia

Este proyecto es código abierto y disponible bajo la Licencia MIT.

## 🙏 Créditos

Construido con ❤️ para amantes de los gatos. 

**TheCatAPI**: Datos e imágenes de gatos - https://thecatapi.com/

**Contribuciones Bienvenidas!** Siéntete libre de crear una rama, modificar y compartir mejoras.

---

**¡Disfruta tu Sitio de Gatos!** 🐱

Para más información o problemas, por favor verifica el repositorio de GitHub.

## 🚀 Quick Start

### Local Development

1. **Navigate to the project directory:**
   ```bash
   cd web/
   ```

2. **Start a local server:**
   ```bash
   # Using Python 3:
   python -m http.server 8000
   
   # Or using Python 2:
   python -m SimpleHTTPServer 8000
   
   # Or using Node.js (http-server):
   npx http-server
   
   # Or using Ruby:
   ruby -run -ehttpd . -p8000
   ```

3. **Open your browser:**
   - Navigate to `http://localhost:8000/`
   - To view specific content, visit:
     - `http://localhost:8000/` - Full website
     - `http://localhost:8000/index.html` - Explicit file reference

4. **Enjoy!** 🎉
   - Explore the cat breeds
   - Click images in the gallery to view full-size
   - Toggle dark mode with the moon/sun icon
   - Try keyboard navigation (Tab, Arrow keys, Escape)

## 📁 Project Structure

```
web/
├── index.html           # Main HTML file
├── styles.css           # All CSS with theme variables and responsive design
├── scripts.js           # JavaScript for interactivity
├── images/              # Image directory
│   └── cats/            # Cat photos for gallery
├── README.md            # This file
└── .gitignore           # (Optional) Git ignore file
```

## 🎨 Theming

The website uses CSS custom properties (variables) for easy theming:

- **Light Mode**: Clean white background with dark text (default)
- **Dark Mode**: Dark background with light text

### Theme Persistence
Your theme preference is saved in browser `localStorage` and restored when you return to the site.

### Switching Themes
Click the sun/moon icon in the header to toggle between light and dark modes. The preference is automatically saved.

### OS Preference
If you're visiting for the first time, the site respects your operating system's dark mode setting.

## 🖼️ Gallery Usage

### Viewing Images
- **Click** any image thumbnail to open the full-size view
- **Click** next/previous arrows to navigate
- **Use arrow keys** (←/→) to navigate with keyboard
- **Press Escape** or click outside the modal to close
- **Swipe** left/right on mobile/tablet (optional gesture support)

### Adding Images
To add more images to the gallery:
1. Place image files in `web/images/cats/` directory
2. Edit `scripts.js` and add entries to the `galleryData` array:
   ```javascript
   { src: 'images/cats/your-image.jpg', caption: 'Your image description' }
   ```
3. Refresh the page

### Image Optimization Tips
- Use JPEG format for photos (smaller file size)
- Use PNG for images with transparency
- Keep image file sizes under 500KB each
- Use descriptive file names

## ⌨️ Keyboard Navigation

- **Tab**: Navigate through links and buttons
- **Enter/Space**: Activate buttons and links
- **Arrow Keys** (in gallery): Navigate between images (← previous, → next)
- **Escape** (in gallery): Close modal

## 📱 Responsive Design

The website is fully responsive with optimized layouts for:

- **Mobile** (< 480px): Single column, compact navigation with hamburger menu
- **Tablet** (480px - 1024px): Two-column layout, responsive grid
- **Desktop** (> 1024px): Multi-column layout with full navigation

Test responsiveness by:
1. Opening DevTools (F12 or right-click → Inspect)
2. Clicking the device toggle button (top-left)
3. Selecting different devices or resizing the viewport

## 🌐 Deployment

### GitHub Pages

1. **Create a GitHub repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cat website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Under "Source", select **"main"** branch and **"/(root)"** directory
   - Click **Save**

3. **Access your site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
   - It may take a few minutes to build and deploy

### Other Hosting Platforms

The website works on any static hosting:
- **Netlify**: Drag and drop the `web/` folder
- **Vercel**: Connect your GitHub repo
- **AWS S3**: Upload files and enable static website hosting
- **Your own server**: Copy files to your web server directory

## 🔧 Customization

### Change Colors
Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --color-accent: #ff6b6b;  /* Change primary color */
    --color-bg: #ffffff;      /* Change background */
    --color-text: #333333;    /* Change text color */
    /* ... more variables ... */
}
```

### Change Breed Information
Edit `index.html` and locate the `.breed-cards` section. Update breed names, descriptions, and traits.

### Change Site Title
- Edit `<title>` in `index.html` (browser tab title)
- Edit `.logo` text (header)
- Edit hero section headings

### Change Section Content
All main sections are in `index.html`. Find the section you want to edit and modify the HTML directly.

## ✅ Testing Checklist

Before deployment, verify:

- [ ] All images load correctly
- [ ] Dark mode toggle works
- [ ] Gallery images open and can be navigated
- [ ] Mobile menu toggle works
- [ ] Keyboard navigation works (Tab, Arrow keys, Escape)
- [ ] Text contrast is readable in both light and dark modes
- [ ] No console errors (check DevTools → Console)
- [ ] Links work and point to correct sections
- [ ] Responsive design works on multiple screen sizes

## 🎯 Performance Tips

- Images should be optimized (max ~200KB for thumbnails, ~800KB for modal images)
- Total CSS + JS should stay under 100KB
- Run Lighthouse audit regularly (DevTools → Lighthouse)
- Aim for Lighthouse scores: Performance ≥85, Accessibility ≥90

To check performance:
1. Open DevTools (F12)
2. Click **Lighthouse** tab
3. Click **Analyze page load**

## 📚 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

**Not supported:**
- Internet Explorer 11 and below
- Very old Android browsers

## 🐛 Troubleshooting

### Images Don't Load
- Check the `images/cats/` folder contains the image files
- Verify file paths in `scripts.js` match actual file names
- Check DevTools → Network tab for 404 errors

### Dark Mode Not Saving
- Check if localStorage is enabled in your browser
- Try clearing browser cache and cookies
- Check DevTools → Application → Local Storage

### Mobile Menu Doesn't Work
- Verify `scripts.js` is loaded (check DevTools → Network tab)
- Check console for JavaScript errors (DevTools → Console)

### Gallery Modal Not Opening
- Ensure images exist in `images/cats/` directory
- Verify image file names in `scripts.js` galleryData array
- Check for console errors

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with ❤️ for cat lovers everywhere. Icons and emojis used throughout the site.

**Contributions Welcome!** Feel free to fork, modify, and share improvements.

---

**Enjoy your Cat Website!** 🐱

For more information or issues, please check the GitHub repository.
