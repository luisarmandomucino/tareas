let min = 1;
let max = 100;
let resultado = document.getElementById("resultado");

let iniciarBtn = document.getElementById("iniciar");
iniciarBtn.addEventListener("click", function() {
    resultado.innerHTML = ""; // Limpiar resultados anteriores
    min = 1; // Reiniciar el rango mínimo
    max = 100; // Reiniciar el rango máximo
    iniciarAdivinanza();
});

function iniciarAdivinanza() {
    let numeroAdivinado = Math.floor((min + max) / 2);
    
    let confirmacion = confirm("¿Es " + numeroAdivinado + " el número que pensaste?");

    if (confirmacion) {
        resultado.innerHTML = "<p>Tu número es el " + numeroAdivinado + ", excelente decisión.</p>";
    } else {
        let mayorMenor = confirm("¿Tu número es mayor que " + numeroAdivinado + "?");

        if (mayorMenor) {
            min = numeroAdivinado + 1;
        } else {
            max = numeroAdivinado - 1;
        }

        iniciarAdivinanza();
    }
}


