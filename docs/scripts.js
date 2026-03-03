// ===== CONFIGURACIÓN DE API =====
// En producción, esto debería venir de un servidor backend seguro
const API_KEY = 'live_WsrEQeFkiJc3b3512MYSM7wxtEekWhYblJ1NdPwqrxxeUEjGWHPRj4dmf4qe8Jf4';
const API_URL = 'https://api.thecatapi.com/v1';

// ===== TEMA OSCURO/CLARO =====
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Inicializar tema al cargar la página
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // Usar preferencia guardada
        setTheme(savedTheme);
    } else {
        // Verificar preferencia del SO
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
}

// Establecer tema y actualizar interfaz
function setTheme(theme) {
    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('☀️');
    } else {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateThemeIcon('🌙');
    }
}

// Actualizar icono del tema
function updateThemeIcon(icon) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = icon;
    }
}

// Alternar tema al hacer clic
function toggleTheme() {
    const isDark = htmlElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
}

// Escucha del botón de tema
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Escuchar cambios de preferencia de tema del SO
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// ===== NAVEGACIÓN MÓVIL =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Alternar menú móvil
function toggleMobileMenu() {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Cerrar menú
function closeMenu() {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
}

// Escuchas de navegación móvil
if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
}

// Cerrar menú al hacer clic en un enlace
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Cerrar menú al hacer clic afuera
document.addEventListener('click', (e) => {
    if (navToggle && !navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        closeMenu();
    }
});

// ===== MODAL DE GALERÍA =====
const galleryModal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.getElementById('modalClose');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');

let currentImageIndex = 0;
let galleryImages = [];

// Abrir modal con imagen
function openModal(index = 0) {
    currentImageIndex = index;
    updateModalContent();
    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    galleryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Actualizar contenido del modal
function updateModalContent() {
    if (galleryImages.length > 0) {
        const imageData = galleryImages[currentImageIndex];
        modalImage.src = imageData.url;
        modalCaption.textContent = `ID: ${imageData.id}`;
    }
}

// Siguiente imagen
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateModalContent();
}

// Imagen anterior
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateModalContent();
}

// Escuchas del modal
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalNext) {
    modalNext.addEventListener('click', nextImage);
}

if (modalPrev) {
    modalPrev.addEventListener('click', prevImage);
}

// Navegación con teclado en el modal
document.addEventListener('keydown', (e) => {
    if (galleryModal.classList.contains('active')) {
        if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'Escape') {
            closeModal();
        }
    }
});

// Cerrar modal al hacer clic afuera
galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        closeModal();
    }
});

// ===== GESTOS TÁCTILES =====
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextImage();
    } else if (touchEndX > touchStartX + 50) {
        prevImage();
    }
}

galleryModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

galleryModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

// ===== INTEGRACIÓN CON THECATAPI =====

// Obtener razas de gatos
async function fetchBreeds() {
    try {
        const response = await fetch(`${API_URL}/breeds?limit=10`, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        
        if (!response.ok) {
            throw new Error(`Error en la API: ${response.status}`);
        }
        
        const breeds = await response.json();
        displayBreeds(breeds);
    } catch (error) {
        console.error('Error al obtener razas:', error);
        const container = document.getElementById('breedsContainer');
        if (container) {
            container.innerHTML = '<div class="error">Error al cargar las razas. Por favor, intenta más tarde.</div>';
        }
    }
}

// Mostrar razas en la página
function displayBreeds(breeds) {
    const container = document.getElementById('breedsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    breeds.forEach(breed => {
        const breedCard = document.createElement('div');
        breedCard.className = 'breed-card';
        
        const imageUrl = breed.image?.url || 'images/placeholder.jpg';
        const origin = breed.origin || 'Desconocido';
        const temperament = breed.temperament || 'No especificado';
        const description = breed.description || 'Sin descripción disponible';
        
        breedCard.innerHTML = `
            <img src="${imageUrl}" alt="${breed.name}" class="breed-image" onerror="this.src='images/placeholder.jpg'">
            <h3>${breed.name}</h3>
            <p class="origin">Origen: ${origin}</p>
            <p class="description">${description}</p>
            <ul class="traits">
                <li>Temperamento: ${temperament}</li>
                <li>Nivel de energía: ${breed.energy_level || 'N/A'}/5</li>
                <li>Inteligencia: ${breed.intelligence || 'N/A'}/5</li>
            </ul>
        `;
        
        container.appendChild(breedCard);
    });
}

// Obtener fotos de gatos
async function fetchCatImages() {
    try {
        const response = await fetch(`${API_URL}/images/search?limit=20`, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        
        if (!response.ok) {
            throw new Error(`Error en la API: ${response.status}`);
        }
        
        const images = await response.json();
        displayGallery(images);
    } catch (error) {
        console.error('Error al obtener imágenes:', error);
        const container = document.getElementById('galleryContainer');
        if (container) {
            container.innerHTML = '<div class="error">Error al cargar las imágenes. Por favor, intenta más tarde.</div>';
        }
    }
}

// Mostrar galería en la página
function displayGallery(images) {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
    
    container.innerHTML = '';
    galleryImages = images;
    
    images.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = `Foto de gato ${index + 1}`;
        img.className = 'gallery-image';
        img.addEventListener('click', () => openModal(index));
        
        galleryItem.appendChild(img);
        container.appendChild(galleryItem);
    });
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    console.log('✓ Sitio de gatos inicializado correctamente');
    console.log('✓ Sistema de tema listo');
    console.log('✓ Modal de galería listo');
    console.log('✓ Navegación móvil lista');
    
    // Cargar datos de la API
    console.log('Cargando datos de TheCatAPI...');
    fetchBreeds();
    fetchCatImages();
});
