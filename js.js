document.addEventListener("DOMContentLoaded", function () {
    fetch("/componentes/navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("nav-container").innerHTML = data)
        .catch(error => console.error("Error cargando el nav:", error));

    fetch("/componentes/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-container").innerHTML = data)
        .catch(error => console.error("Error cargando el footer:", error));
});


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
