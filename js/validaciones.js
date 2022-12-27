export function valida(input) {
    const tipoInput = input.dataset.tipo;
    if (validadores[tipoInput]) {
        validadores[tipoInput](input);
    }
    console.log(input.parentElement);
    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML =""
    }else{
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML =mostrarError(tipoInput,input)
    }
}
const mensajesErrores = {
    nombre:{valueMissing:'El campo nombre no puede estar vacio'},
    email:{
        valueMissing:'El campo email no puede estar vacio',
        typeMismatch:'El correo no es valido'
    },
    password:{
        valueMissing:'Este campo no puede estar vacio',
        patternMismatch:'Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.'
    },
    nacimiento:{
        valueMissing:"El campo nacimiento no puede estar vacio",
        customError:"No eres mayor de edad"
    }
    ,numero:{
        valueMissing:"El campo numero no puede estar vacio",
        patternMismatch:'El formato requerido es XXXXXXXXXX 10 numeros'

    },
    direccion:{
        valueMissing:"El campo direccion no puede estar vacio",
        patternMismatch:'Al menos 10 - 40 caracteres'
    },
    ciudad:{
        valueMissing:"El campo ciudad no puede estar vacio",
        patternMismatch:'Al menos 10 - 40 caracteres'
    },
    estado:{
        valueMissing:"El campo estado no puede estar vacio",
        patternMismatch:'Al menos 10 - 40 caracteres'
    }
};

const validadores = {
    nacimiento: (input) => validadrNac(input),
}
const tipoErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];
function mostrarError(tipoInput, input) {
    let mensaje = "";

    tipoErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje=mensajesErrores[tipoInput][error];
        }
    })

    return mensaje;
    
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