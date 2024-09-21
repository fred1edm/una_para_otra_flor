document.getElementById("BVer").addEventListener('click', function() {
    const resultado = document.getElementById("resultado");
    resultado.style.display = "block";
    resultado.classList.add('visible');
    resultado.classList.remove('oculto');
});

document.getElementById("BotonCerrar").addEventListener('click', function() {
    const resultado = document.getElementById("resultado");
    resultado.style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
});
