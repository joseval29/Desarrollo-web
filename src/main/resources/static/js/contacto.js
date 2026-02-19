function validarFormulario() {
    let valido = true;

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^[0-9]{7,15}$/;

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        valido = false;
    }

    if (!regexEmail.test(correo)) {
        alert("Ingrese un correo electrónico válido.");
        valido = false;
    }

    if (!regexTelefono.test(telefono)) {
        alert("El teléfono debe contener solo números (7 a 15 dígitos).");
        valido = false;
    }

    if (asunto === "default") {
        alert("Debe seleccionar un asunto válido.");
        valido = false;
    }

    if (mensaje.length < 20 || mensaje.length > 400) {
        alert("El mensaje debe tener entre 20 y 400 caracteres.");
        valido = false;
    }

    if (valido) {
        document.getElementById("form-contacto").classList.add("form-valido");
    }

    return valido;
}

function contarCaracteres() {
    const longitud = document.getElementById("mensaje").value.length;
    const contador = document.getElementById("contador");

    if (longitud < 20) {
        contador.innerText = `Te faltan ${20 - longitud} caracteres para el mínimo`;
    } else {
        contador.innerText = `${longitud} / 400`;
    }
}