// validación de Consultas

function validarFormConsultas() {

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let contenido = document.getElementById("contenidoConsultas").value;
    let boleana = false;

    //test nombre
    if ((nombre == null) || nombre.length == 0) {
        alert("¡ERROR: El campo nombre no debe ir vacio o con espacios en blanco!");
        return false;
    }

    //test correo
    if ((!(/\S+@\S+\.\S+/.test(correo)))) {
        alert('¡ERROR: El escribir un correo válido!');
        return false;
    }

    //test contenido
    if ((contenido == null) || contenido.length == 0) {
        alert("¡ERROR: Debe escribir su consulta!");
        return false;
    }
    return true;
}

// validación subscipción Newsletter

function validarSubNews() {

    let subscipcion = document.getElementById("subNews").value;
    let boleana = false;

    if ((!(/\S+@\S+\.\S+/.test("subNews")))) {
        alert('¡ERROR: El escribir un correo válido!');
        return false;
    }
    return true;
}