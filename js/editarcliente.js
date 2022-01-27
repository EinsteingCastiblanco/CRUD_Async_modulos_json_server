import { obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';

(function() {

    //campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        //? busca lo que haya en la url
        const parametrosURL = new URLSearchParams(window.location.search);

        //? obtener el id que es mandado port la url
        const idCliente = parseInt( parametrosURL.get('id') );

        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);
    });

    const formulario = document.querySelector('#formulario');
    
    formulario.addEventListener( 'submit', validarCliente );

    function mostrarCliente(cliente) {
        const { nombre, empresa, email, telefono, id } = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();

        //validando
        const cliente = {
            //? como tiene el mismo name no es necesario colocar nombre: nombre
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt( idInput.value )
        };

        if(validar(cliente)){
            mostrarAlerta('todos los campos son obligatorios');
            return;
        }

        editarCliente(cliente);

    }
})();