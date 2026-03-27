
const fotoPrincipalUrl = 'images/foto.png';

const bgImage = document.getElementById('bg-image');
const enlaces = document.querySelectorAll('.links-list a');


window.onload = () => {
    bgImage.style.backgroundImage = `url('${fotoPrincipalUrl}')`;
};


enlaces.forEach(enlace => {
    const img = new Image();
    img.src = enlace.getAttribute('data-foto');
});

enlaces.forEach(enlace => {
    enlace.addEventListener('mouseenter', function() {
        const nuevaFoto = this.getAttribute('data-foto');
        bgImage.style.backgroundImage = `url('${nuevaFoto}')`;
    });

    enlace.addEventListener('mouseleave', function() {
        bgImage.style.backgroundImage = `url('${fotoPrincipalUrl}')`;
    });
});