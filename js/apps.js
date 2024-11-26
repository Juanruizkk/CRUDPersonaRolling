import Contacto from "./claseContacto.js";

/* Declaro variables globales */
const $modalContacto = new bootstrap.Modal(document.getElementById('contactModal')),
    $btnAgregar = document.querySelector('.btn.btn-primary'),
    $form = document.getElementById('contactForm'),
    $inputNombre = document.getElementById('nombre'),
    $inputApellido = document.getElementById('apellido'),
    $inputApodo = document.getElementById('apodo'),
    $inputEmail = document.getElementById('email'),
    $inputDireccion = document.getElementById('direccion'),
    $inputTelefono = document.getElementById('telefono'),
    $inputImagen = document.getElementById('urlImagen');

const listaContactos = [];

/* Funciones */
function abrirModalContacto() {
    $modalContacto.show()
}

function cerrarModalContacto() {
    $modalContacto.hide();
}
function limpiarFormulario() {
    $form.reset();
}

function guardarEnLocalStorage() {
    localStorage.setItem('agendaKey', JSON.stringify(listaContactos));
}

function crearContacto(e) {
    e.preventDefault();
    /* Validar datos del contacto */

    /* Creo el objeto */
    const nuevoContacto = new Contacto($inputNombre.value, $inputApellido.value, $inputEmail.value, $inputTelefono.value, $inputApodo.value, $inputDireccion.value, $inputImagen.value);
    console.log(nuevoContacto)
    /* Guardar contacto nuevo en lista de contactos */
    listaContactos.push();
    /* Limpiar formulario */
    limpiarFormulario();
    /* Guardar en localStorage */
    guardarEnLocalStorage();
    /* Cierro modal */
    cerrarModalContacto();

}


/* Resto de la logica del proyecoto */
$btnAgregar.addEventListener('click', abrirModalContacto);

$form.addEventListener('submit', crearContacto);