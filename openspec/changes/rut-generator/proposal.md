# Propuesta: Generador de RUT chileno

Crear una herramienta web responsive estilo SaaS interna para generar RUT chilenos válidos tanto en modo individual como en modo masivo.

## Objetivo
Permitir a usuarios generar RUTs chilenos válidos con dígito verificador correcto y exportarlos de forma cómoda, con enfoque en UX moderna.

## Características principales

- **Modo individual**
  - Genera un RUT válido (con formato estándar `12.345.678-5`).
  - Muestra el resultado en pantalla.
  - Permite copiar el RUT generado (botón "Copiar").

- **Modo masivo**
  - Permite ingresar una cantidad de RUTs a generar.
  - Genera una lista de resultados con formato y sin formato.
  - Muestra la lista en una tabla paginada/scrollable.
  - Permite descargar los resultados en Excel (`.xlsx`) con columnas `N°`, `RUT` y `RUT_SIN_FORMATO`.

- **Validación y UX**
  - Validar cantidades razonables (p.ej., 1–10 000). Mostrar mensajes de error claros.
  - Mostrar estados de carga (generando, listo, error).
  - Mensajes amigables y feedback visual.

- **Tecnología sugerida**
  - React + TypeScript
  - Tailwind CSS para estilos modernos y responsivos
  - Librería de exportación a Excel (por ejemplo, `xlsx` o `sheetjs`)

## Resultado esperado
Una herramienta interna que pueda usarse como página web o microapp, con UI limpia, accesible y pronta para integrarse en el stack existente.
