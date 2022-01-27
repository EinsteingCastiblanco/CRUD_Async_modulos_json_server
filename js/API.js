const url = "http://localhost:3000/clientes";

// enviar los clientes al servidor clientes
export const nuevoCliente = async cliente => {
    
    try {
        //? enviar informacion al servidor
        //? por defecto el metodo de fecth es GET para recibir datos
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ), //lo que vamos a enviar y como que, como string o como objeto
            headers: {
                'Content-Type': 'application/json'
            }
        });

        //despues de enviar la informacion nos lleva al index
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

//obtener los datos del servidor clientes
export const obtenerClientes = async () => {

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.log(error);
    }
}

//eliminar el cliente
export const eliminarCliente = async id => {
    try {
        //? nota: cuando se usa en el template literal el signo "/" se esta uniendo a la url el id
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//obtener cliente por id
export const obtenerCliente = async id => {
    try {
        const respuesta = await fetch(`${url}/${id}`);
        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.log(error);
    }
}

//actualizar cliente
export const editarCliente = async cliente => {

    try {
        const respuesta = await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify( cliente ), //lo que vamos a enviar y como que, como string o como objeto
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = "index.html";

    } catch (error) {
        console.log(error);
    }
}