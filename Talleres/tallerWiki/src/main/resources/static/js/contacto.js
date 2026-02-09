function validarFormulario() {
    let valido = true;

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        valido = false;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        alert("Ingrese un correo electrónico válido.");
        valido = false;
    }

    if (!/^[0-9]{7,15}$/.test(telefono)) {
        alert("El teléfono debe contener solo números (7 a 15 dígitos).");
        valido = false;
    }

    if (asunto === "") {
        alert("Debe seleccionar un asunto.");
        valido = false;
    }

    if (mensaje.length < 20 || mensaje.length > 400) {
        alert("El mensaje debe tener entre 20 y 400 caracteres.");
        valido = false;
    }

    return valido;
}

function contarCaracteres() {
    const mensaje = document.getElementById("mensaje").value.length;
    document.getElementById("contador").innerText = mensaje + " / 400";
}
