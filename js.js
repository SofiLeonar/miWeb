

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



// Modal celu

document.addEventListener("DOMContentLoaded", function () {
    function esDispositivoMovil() {
        return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    }

    if (esDispositivoMovil()) {
        let modal = document.getElementById("modalMobile");
        modal.style.display = "flex";

        document.querySelector(".close").addEventListener("click", function () {
            modal.style.display = "none";
        });
    }
});

//Menu hamburguesa
    document.querySelector(".menu-icon").addEventListener("click", function() {
        console.log("hola");
        this.classList.toggle("active");
    });


