import {valida} from './validaciones.js'

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    //blur: cuando el cursor ya no esta en el input
    input.addEventListener('blur',(input) =>{
        valida(input.target)
    })
})