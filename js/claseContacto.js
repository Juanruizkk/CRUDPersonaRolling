export default class Contacto {
    #id;
    #nombre;
    #apellido;
    #email;
    #telefono;
    #apodo;
    #direccion;
    #imagen;
    constructor(nombre, apellido, email, telefono, apodo, direccion, imagen) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#email = email;
        this.#telefono = telefono;
        this.#apodo = apodo;
        this.#direccion = direccion;
        this.#imagen = imagen;
        this.#id = crypto.randomUUID();
    }
    // Getters
    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    get apellido() {
        return this.#apellido;
    }

    get email() {
        return this.#email;
    }

    get telefono() {
        return this.#telefono;
    }

    get apodo() {
        return this.#apodo;
    }

    get direccion() {
        return this.#direccion;
    }

    get imagen() {
        return this.#imagen;
    }

    // Setters
    set nombre(value) {
        this.#nombre = value;
    }

    set apellido(value) {
        this.#apellido = value;
    }

    set email(value) {
        this.#email = value;
    }

    set telefono(value) {
        this.#telefono = value;
    }

    set apodo(value) {
        this.#apodo = value;
    }

    set direccion(value) {
        this.#direccion = value;
    }

    set imagen(value) {
        this.#imagen = value;
    }

    /* Metodo para que funcione JSON.stringify */

    toJSON(){
        return {
            id: this.id,
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
            telefono: this.telefono,
            apodo: this.apodo,
            direccion: this.direccion,
            imagen: this.imagen,
        }
    }
}