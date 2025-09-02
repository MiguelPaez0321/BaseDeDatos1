document.addEventListener("DOMContentLoaded", function() {

    const boton = document.getElementById("cambiarFondo");
    const icono = document.getElementById("icono");
    const body = document.body;

    let modoOscuro = true;

    function activarModoClaro() {
        body.style.backgroundColor = "rgb(193, 200, 156)";
        body.style.color = "rgb(52, 53, 18)";
        icono.className = "bi bi-brightness-high-fill";
        modoOscuro = false;
    }

    function activarModoOscuro() {
        body.style.backgroundColor = "rgb(52, 53, 18)";
        body.style.color = "rgb(193, 200, 156)";
        icono.className = "bi bi-cloud-moon-fill";
        modoOscuro = true;
    }

    function alternarModo() {
        if (modoOscuro) {
            activarModoClaro();
        } else {
            activarModoOscuro();
        }
    }

    boton.addEventListener("click", alternarModo);
});
