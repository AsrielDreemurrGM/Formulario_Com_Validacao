const form = document.getElementById('formulario');
const valorValida = document.getElementById('valorA');
var formEValido = false;

//NÃO FUNCIONA - ARRUMAR
// function validaForm(valor) {
//     const valorB = form.getElementById('ValorB');
//     return valor < valorB;
// }


// *form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     formEValido = validaForm(valorValida.value)
//     if (formEValido) {
//         valorA.style.border = '1px solid red';
//         document.querySelector('msg-erro').style.display = 'block';
//     }
// }) Ctrl + K, Ctrl + U - remover comentário