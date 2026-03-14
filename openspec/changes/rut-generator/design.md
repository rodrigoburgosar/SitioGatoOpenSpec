# Diseño: Generador de RUT chileno

## Arquitectura general

- **Stack principal**
  - **React** (componentes funcionales + hooks)
  - **TypeScript** (tipado fuerte, seguridad de tipos)
  - **Tailwind CSS** (diseño responsivo y consistente)
  - **Vite** o **Create React App** como base de proyecto (preferible Vite para velocidad)

- **Estructura de carpetas sugerida**:
  - `src/components/` — componentes UI reutilizables
  - `src/pages/` — vistas principales (Individual, Masivo)
  - `src/utils/` — funciones utilitarias (cálculo dígito verificador, formateo RUT, generación masiva)
  - `src/services/` — exportación a Excel, helpers de descarga
  - `src/styles/` — estilos globales y temas

## Componentes clave

### 1) `RutGeneratorPage`
Contenedor principal que cambia entre modo individual y masivo.

- Estado:
  - `mode: 'single' | 'batch'`
  - `status: 'idle' | 'loading' | 'success' | 'error'`
  - `message?: string`

### 2) `SingleRutForm`
- Input: botón "Generar".
- Resultado: muestra RUT formateado y botón "Copiar".
- Validación: no requiere entrada del usuario (genera aleatorio).

### 3) `BatchRutForm`
- Input: cantidad (número).
- Validación: entre 1 y límite (p.ej., 10000).
- Botones: "Generar lista" y "Descargar Excel".
- Muestra tabla con columnas: `N°`, `RUT`, `RUT_SIN_FORMATO`.
- Soporta paginación/scroll o solo scroll largo con virtualización ligera (opcional).

### 4) `ExcelExportService`
- Función que recibe la lista y descarga `.xlsx`.
- Usa `xlsx` / `SheetJS` para crear workbook y sheet.

## Lógica de RUT

- Generar número base de 7-8 dígitos (sin dígito verificador).
- Calcular dígito verificador usando algoritmo chileno:
  1. Multiplicar dígitos (de derecha a izquierda) por secuencia [2,3,4,5,6,7] repetida.
  2. Sumar productos, calcular módulo 11.
  3. Dígito verificador = 11 - (suma % 11); convertir 10 → 'K', 11 → '0'.
- Formatear RUT como `12.345.678-5`.

## UX y accesibilidad

- UI limpia tipo SaaS interna (panel, tarjetas, estados claros).
- Soporte móvil: layout responsive, botones full width en móvil.
- Mensajes de error y éxito claros.
- Interfaces accesibles (etiquetas, colores con suficiente contraste).

## Consideraciones de entrega

- La funcionalidad básica puede implementarse sin backend (todo en cliente).
- Se puede integrar en un repositorio existente como una nueva página o microapp.
