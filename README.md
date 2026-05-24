# Desafío Web: Matemáticas en el Mundo Real
## Aplicación Interactiva de Fibonacci y Números Primos

Este proyecto es una plataforma web interactiva diseñada para demostrar cómo dos conceptos fundamentales de la aritmética y la matemática pura, la **Sucesión de Fibonacci** y los **Números Primos**, ofrecen soluciones optimizadas y análisis críticos a problemas prácticos de nuestro entorno cotidiano.

La interfaz unifica ambas herramientas en un sistema modular, ordenado y completamente responsivo, estructurado bajo estándares de desarrollo web limpio.

---

## 🚀 Problemas del Mundo Real Resueltos

### 1. 🌱 Fibonacci en el Diseño Natural (Filotaxis Botánica)
* **El Problema Real:** En la naturaleza, las especies vegetales enfrentan el desafío biológico de distribuir sus hojas, ramas y pétalos de forma óptima para capturar la mayor cantidad de luz solar y agua de lluvia posible sin obstruirse o taparse unas a otras.
* **La Solución Matemática:** Las plantas resuelven este problema geométrico utilizando espirales basados en la Sucesión de Fibonacci. Esta herramienta simula dicho patrón calculando matemáticamente cuántos elementos se desarrollan en cada capa de crecimiento ideal, permitiendo estudiar la biomímesis para aplicaciones en arquitectura sostenible e ingeniería de espacios.

### 2. 🔑 Números Primos en Códigos de Acceso (Validación de Seguridad)
* **El Problema Real:** Los entornos digitales y sistemas informáticos modernos requieren verificar constantemente la solidez de las contraseñas y claves numéricas de los usuarios para evitar vulnerabilidades ante ciberataques.
* **La Solución Matemática:** La seguridad informática actual se apoya en las propiedades de la aritmética pura. Esta herramienta evalúa el código de acceso ingresado mediante un algoritmo de descarte que verifica si posee exactamente dos divisores (el 1 y sí mismo). Si el número es primo, el sistema lo certifica como una clave de alta seguridad y baja predictibilidad.

---

## ⚙️ Especificaciones Técnicas y Cumplimiento de la Rúbrica

El desarrollo de este proyecto se ciñe estrictamente a las restricciones metodológicas del documento de evaluación:

* **Manipulación Dinámica del DOM:** La captura de los datos desde los formularios y el despliegue inmediato de las soluciones en pantalla se ejecutan de manera exclusiva a través del uso de `document.getElementById()`.
* **Controladores de Formulario:** Las entradas numéricas se gestionan mediante etiquetas `<form>` nativas de HTML5, asegurando filtros mínimos obligatorios que restringen valores vacíos o negativos en la interfaz.
* **Prohibición de Vectores (Fibonacci Puro):** El algoritmo iterativo encargado de calcular la secuencia de Fibonacci opera utilizando únicamente variables de intercambio simples (`a`, `b`, `c`), respetando la restricción técnica de **no almacenar los datos en arrays o vectores dinámicos**.
* **Lógica de Descarte por Módulo (Primos):** El validador de claves numéricas emplea un bucle estructurado para contabilizar los residuos exactos (`numero % i == 0`), aislando con exactitud matemática el comportamiento de los números primos.
* **Diseño Visual Responsivo:** La hoja de estilos CSS implementa propiedades modernas de cuadrículas (`Grid Layout`) y Media Queries, asegurando que la visualización sea fluida tanto en computadoras de escritorio (diseño bicolumna paralelo) como en dispositivos móviles y celulares (columna única vertical).

---

## 📁 Estructura del Repositorio

Para cumplir con el requerimiento de código organizado e independiente, el proyecto cuenta con la siguiente arquitectura de archivos:

```text
├── index.html          # Maquetación semántica y estructura del contenido web.
├── css/
│   └── estilos.css    # Hoja de estilos para el diseño visual responsivo.
└── js/
    └── script.js      # Lógica de programación, control del DOM y algoritmos.
