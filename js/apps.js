import Contacto from "./claseContacto.js";

/* Declaro variables globales */
const $modalContacto = new bootstrap.Modal(document.getElementById('contactModal')),
    $btnAgregar = document.querySelector('.btn.btn-primary');


function abrirModalContacto() {
    $modalContacto.show()
}
$btnAgregar.addEventListener('click', abrirModalContacto);

/* Funciones */


/* Resto de la logica del proyecoto */
const nuevoContacto = new Contacto('Juan', 'perez', 'juanignacio@gmail.com', '3814452417', 'juancho', 'Paraguay 1234', 'https://universe.rollingcodeschool.com');

console.log(nuevoContacto);