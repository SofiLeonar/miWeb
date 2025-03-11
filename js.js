// Linterna

document.addEventListener("DOMContentLoaded", () => {
    const switchLinterna = document.getElementById("flexSwitchCheckChecked");
    const conteDegradado = document.querySelector(".conte-degradado");

    if (switchLinterna.checked) {
        conteDegradado.style.display = "none";
    } else {
        conteDegradado.style.display = "block";
    }

    switchLinterna.addEventListener("change", () => {
        if (switchLinterna.checked) {
            conteDegradado.style.display = "none";
        } else {
            conteDegradado.style.display = "block";
        }
    });

    const sizeDegradado = 200; 
    function actualizarLinterna(event) {
        if (!switchLinterna.checked) {
            const x = event.clientX;
            const y = event.clientY;

            conteDegradado.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(244, 248, 153, 0.5) 0%, rgba(0, 0, 0, 0.98) ${sizeDegradado}px)`;
        }
    }

    document.addEventListener("mousemove", actualizarLinterna);
});
