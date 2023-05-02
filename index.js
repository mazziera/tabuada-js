const inputNumero = document.getElementById('numero');

const botao = document.getElementById('botao-tabuada');

let tabuada = document.getElementById('select-tabuada');

botao.addEventListener('click', calcularTabuada);

function calcularTabuada() {

    if (inputNumero.value.length == '') {
        alert("Necessário digitar um número para calcular a tabuada");

    } else {
        let numeroBase = Number(inputNumero.value);

        for (let numeroMultiplicador = 1; numeroMultiplicador <= 10; numeroMultiplicador++) {
            let resultado = document.createElement('option');

            resultado.text += `${numeroBase} X ${numeroMultiplicador} = ${numeroBase * numeroMultiplicador}`

            tabuada.appendChild(resultado);
        }

    }
};
