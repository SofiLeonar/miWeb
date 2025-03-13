// Banner
const bannerContainer = document.querySelector('.banner-container');
const codeBanner = document.querySelector('.code');
const arteBanner = document.querySelector('.arte');

bannerContainer.addEventListener('mousemove', (e) => {
    const containerWidth = bannerContainer.offsetWidth;
    const mouseX = e.clientX;

    if (mouseX < containerWidth / 2) {
        codeBanner.classList.add('expanded');
        codeBanner.classList.remove('hidden');
        arteBanner.classList.remove('expanded');
        arteBanner.classList.add('hidden');
    } else {
        arteBanner.classList.add('expanded');
        arteBanner.classList.remove('hidden');
        codeBanner.classList.remove('expanded');
        codeBanner.classList.add('hidden');
    }
});

bannerContainer.addEventListener('mouseleave', () => {
    codeBanner.classList.remove('expanded', 'hidden');
    arteBanner.classList.remove('expanded', 'hidden');
});

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

// Espejo

const video = document.getElementById('video');
const mensaje = document.getElementById('mensaje');

async function iniciarCamara() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.style.display = 'block';
        mensaje.style.display = 'none';
    } catch (error) {
        console.error('Error al acceder a la cámara:', error);
        mensaje.textContent = 'No se pudo acceder a la cámara.';
    }
}

//Galeria

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll('.galeria');

images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

var closeModal = document.getElementById("closeModal");
closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});