export function valida(input) {
    const tipoInput = input.dataset.tipo;
    if (validadores[tipoInput]) {
        validadores[tipoInput](input);
    }
}

const validadores = {
    nacimiento: (input) => validadrNac(input),
}
function validadrNac(input) {
    const fechaCliente = new Date(input.value);
    mayorEdad(fechaCliente);

    let mensaje='';
    if (!mayorEdad(fechaCliente)) {
        mensaje ="No eres mayor de edad"
    }
    input.setCustomValidity(mensaje)
}


function mayorEdad(fecha) {
    const fechaActual = new Date();
    const dfFecha = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return dfFecha  < fechaActual;
}