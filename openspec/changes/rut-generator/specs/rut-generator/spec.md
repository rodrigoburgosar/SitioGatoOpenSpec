## ADDED Requirements

### Requirement: Generador de RUT individual
La aplicación deberá permitir generar un RUT chileno válido (incluyendo dígito verificador) en modo individual.

#### Scenario: Usuario genera un RUT
- **WHEN** el usuario hace clic en "Generar" en el modo individual
- **THEN** el sistema muestra un RUT con formato estándar (`12.345.678-5`)
- **AND** el usuario puede copiar el RUT al portapapeles (botón "Copiar")

### Requirement: Generación masiva de RUTs
La aplicación deberá permitir generar múltiples RUTs a la vez y mostrarlos en una tabla.

#### Scenario: Usuario solicita varios RUTs
- **WHEN** el usuario ingresa una cantidad válida y hace clic en "Generar"
- **THEN** el sistema genera la cantidad solicitada de RUTs válidos
- **AND** muestra una tabla con columnas `N°`, `RUT`, `RUT_SIN_FORMATO`

#### Scenario: Usuario descarga Excel
- **WHEN** el usuario presiona "Descargar Excel" en modo masivo
- **THEN** el sistema descarga un archivo `.xlsx` con columnas `N°`, `RUT`, `RUT_SIN_FORMATO` correspondiente a los resultados mostrados

### Requirement: Validación de entradas
La aplicación deberá validar las entradas y mostrar mensajes amigables.

#### Scenario: Cantidad inválida
- **WHEN** el usuario ingresa una cantidad menor que 1 o mayor que el límite permitido
- **THEN** el sistema muestra un mensaje de error explicando el rango válido

#### Scenario: Estado de carga
- **WHEN** se está generando la lista de RUTs
- **THEN** el sistema muestra un estado de carga (spinner, mensaje "Generando...")

### Requirement: Interfaz moderna y responsive
La aplicación deberá tener una interfaz moderna tipo SaaS que funcione bien en móvil y escritorio.

#### Scenario: Vista en móvil
- **WHEN** el usuario accede desde un dispositivo móvil
- **THEN** la interfaz se adapta (layout vertical, botones grandes, navegación clara)

#### Scenario: Navegación entre modos
- **WHEN** el usuario cambia entre modo individual y masivo
- **THEN** la aplicación mantiene el estado y la transición es fluida
