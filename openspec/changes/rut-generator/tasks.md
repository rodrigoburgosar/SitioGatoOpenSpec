# Tareas: Generador de RUT chileno

## 1. Configuración inicial del proyecto

- [x] 1.1 Crear proyecto React + TypeScript (preferible Vite)
- [x] 1.2 Configurar Tailwind CSS y estilos base
- [x] 1.3 Instalar librería de exportación Excel (`xlsx` o similar)

## 2. Lógica del RUT

- [x] 2.1 Implementar función para generar número base aleatorio (7-8 dígitos)
- [x] 2.2 Implementar función para calcular dígito verificador chileno
- [x] 2.3 Implementar función para formatear RUT `12.345.678-5`

## 3. Modo individual

- [x] 3.1 Crear componente `SingleRutForm` con botón "Generar"
- [x] 3.2 Mostrar RUT generado con formato estándar
- [x] 3.3 Añadir botón "Copiar" que copia el RUT al portapapeles
- [x] 3.4 Mostrar estado de carga y mensajes de resultado

## 4. Modo masivo

- [x] 4.1 Crear componente `BatchRutForm` con input de cantidad
- [x] 4.2 Validar cantidad (p.ej., 1–10000) y mostrar errores
- [x] 4.3 Generar lista de RUTs y mostrarla en una tabla
- [x] 4.4 Añadir botón "Descargar Excel" para exportar resultados

## 5. UI / UX

- [x] 5.1 Implementar navegación entre modos (tabs o botones)
- [x] 5.2 Mostrar estados: "listo", "generando", "error" y "copiado"
- [x] 5.3 Asegurar diseño responsivo y accesible
- [x] 5.4 Añadir mensajes informativos y ejemplos de uso

## 6. Pruebas y validación

- [ ] 6.1 Escribir pruebas unitarias para cálculo de dígito verificador
- [ ] 6.2 Probar exportación Excel y verificar columnas correctas
- [ ] 6.3 Probar comportamiento en móvil y escritorio
- [ ] 6.4 Validar que la cantidad máxima sea razonable y no bloquee UI
