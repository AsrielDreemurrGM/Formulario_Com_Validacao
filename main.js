const form = document.getElementById('formulario');

var valorA = document.getElementById('numberA');
var valorB = document.getElementById('numberB');
var formEValido = false;

function validaForm(primValor, segValor) {
    numeroA = parseFloat(primValor);
    numeroB = parseFloat(segValor);
    return !isNaN(numeroA) && !isNaN(numeroB) && numeroA < numeroB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    formEValido = (validaForm(valorA.value, valorB.value))

    if (formEValido) {
        document.querySelector(".msg-acerto").style.display = 'block';
        valorA.style.border = '2px solid green';
        valorB.style.border = '2px solid green';
    } else {
        document.querySelector(".msg-erro").style.display = 'block';
        valorA.style.border = '2px solid red';
    }
})

function atualizarValido() {
    formEValido = (validaForm(valorA.value, valorB.value));

    if (formEValido) {
        document.querySelector(".msg-erro").style.display = 'none';
        valorA.style.border = '';
    } else {
        document.querySelector(".msg-erro").style.display = 'block';
        valorA.style.border = '2px solid red';
        valorB.style.border = '';
        document.querySelector(".msg-acerto").style.display = 'none';
        valorA.style.border = '';
    }
}

valorA.addEventListener('input', atualizarValido);
valorB.addEventListener('input', atualizarValido);