import { mostrarAlerta, validar } from './funciones.js';
import { nuevoCliente } from './API.js';
//? funcion iife que se llama de inmediato
(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener( 'submit', validarCliente );

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        //validando
        const cliente = {
            //? como tiene el mismo name no es necesario colocar nombre: nombre
            nombre,
            email,
            telefono,
            empresa
        };

        if(validar(cliente)){
            mostrarAlerta('no validado');
            return;
        }
        nuevoCliente(cliente);

    }

})();