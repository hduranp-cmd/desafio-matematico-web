// Esperamos a que la estructura de la página esté cargada para evitar errores de lectura
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // MÓDULO 1: FIBONACCI EN EL DISEÑO NATURAL
    // ==========================================================================
    const btnCalcular = document.getElementById("btnCalcular");
    
    if (btnCalcular) {
        btnCalcular.addEventListener("click", () => {
            // Captura de elementos mediante getElementById
            const inputNiveles = document.getElementById("niveles");
            const contenedorRes = document.getElementById("resultado");
            
            // Conversión del valor a número entero
            const niveles = parseInt(inputNiveles.value);

            // Validación de la entrada del usuario
            if (isNaN(niveles) || niveles < 1) {
                contenedorRes.innerHTML = `
                    <p style="color: #d32f2f; font-weight: bold;">
                        ⚠️ Por favor, ingresa un número de niveles válido (mínimo 1).
                    </p>
                `;
                return;
            }

            // Algoritmo: Serie de Fibonacci sin vectores usando variables simples
            let a = 0;
            let b = 1;
            let c;

            // Construcción del texto interactivo que se mostrará en pantalla
            let textoHTML = `
                <p style="color: #2e7d32; font-weight: bold; margin-bottom: 5px;">
                    🌱 Secuencia botánica generada de forma exitosa:
                </p>
                <ul style="padding-left: 20px; margin: 0; list-style-type: square;">
            `;
            
            // Ciclo interactivo para calcular y acumular cada nivel
            for (let i = 1; i <= niveles; i++) {
                textoHTML += `<li>Nivel ${i}: <strong>${b}</strong> hojas/ramas o espirales.</li>`;
                
                // Desplazamiento matemático de variables
                c = a + b;
                a = b;
                b = c;
            }
            textoHTML += "</ul>";
            
            // Mostrar los resultados directamente en la sección designada de la página
            contenedorRes.innerHTML = textoHTML;
        });
    }


    // ==========================================================================
    // MÓDULO 2: NÚMEROS PRIMOS EN CÓDIGOS DE ACCESO
    // ==========================================================================
    const btnVerificar = document.getElementById("btnVerificar");
    
    if (btnVerificar) {
        btnVerificar.addEventListener("click", () => {
            // Captura de elementos mediante getElementById
            const inputCodigo = document.getElementById("codigo");
            const contenedorPrimoRes = document.getElementById("resultadoPrimo");
            
            // Conversión del valor a número entero
            const numero = parseInt(inputCodigo.value);

            // Validación de la entrada del usuario
            if (isNaN(numero) || numero < 1) {
                contenedorPrimoRes.innerHTML = `
                    <p style="color: #d32f2f; font-weight: bold;">
                        ⚠️ Por favor, ingresa un código numérico válido y positivo.
                    </p>
                `;
                return;
            }

            // Algoritmo: Verificación de número primo por descarte de divisores
            let contador = 0;
            
            // Ciclo for para evaluar el residuo de las divisiones matemáticas
            for (let i = 1; i <= numero; i++) {
                if (numero % i == 0) {
                    contador++; // Se incrementa si la división es exacta
                }
            }

            // Verificación y despliegue del resultado en la pantalla de la página
            if (contador == 2) {
                // Si solo tiene 2 divisores (1 y sí mismo), es primo
                contenedorPrimoRes.innerHTML = `
                    <p style="color: #2e7d32; font-weight: bold; margin-bottom: 2px;">
                        🟩 Código Seguro: El número ${numero} es primo.
                    </p>
                    <p style="font-size: 0.85rem; color: #555; margin: 0;">
                        La clave es válida y cumple con las normativas de seguridad especificadas.
                    </p>
                `;
            } else {
                // Si tiene más o menos divisores, no es primo
                contenedorPrimoRes.innerHTML = `
                    <p style="color: #d32f2f; font-weight: bold; margin-bottom: 2px;">
                        🟥 Código Vulnerable: El número ${numero} no es primo.
                    </p>
                    <p style="font-size: 0.85rem; color: #555; margin: 0;">
                        Posee un total de ${contador} divisores exactos. Se sugiere asignar un número primo para mayor protección.
                    </p>
                `;
            }
        });
    }
});