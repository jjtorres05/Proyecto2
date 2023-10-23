document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("data-form");
    
    form.addEventListener("submit", function (event) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = ""; // Restablece el mensaje de error
    
        const fechaPublicada = document.getElementById("fechaPublicada").value;
        const mesPesos = document.getElementById("mesPesos").value;
        const mesVigencia = document.getElementById("mesVigencia").value;
        const costoCr01 = parseCurrency(document.getElementById("costoCr01").value);
        const costoCr02 = parseCurrency(document.getElementById("costoCr02").value);
        const costoCr03 = parseCurrency(document.getElementById("costoCr03").value);
        const costoCr04 = parseCurrency(document.getElementById("costoCr04").value);
        const costoEstrato4 = parseCurrency(document.getElementById("costoEstrato4").value);
    
        if (
            fechaPublicada.trim() === "" ||
            mesPesos.trim() === "" ||
            mesVigencia.trim() === "" ||
            isNaN(costoCr01) ||
            isNaN(costoCr02) ||
            isNaN(costoCr03) ||
            isNaN(costoCr04) ||
            isNaN(costoEstrato4)
        ) {
            errorMessage.textContent = "Por favor, completa todos los campos correctamente.";
            event.preventDefault(); // Evita el envío del formulario si hay errores
        }
    });
    
    function parseCurrency(value) {
        return parseFloat(value.replace(/[^\d.-]/g, ""));
    }
});