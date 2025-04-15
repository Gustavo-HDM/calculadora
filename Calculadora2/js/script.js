var resultadoLimpa = false;

function expressao(parametro) {
    if (resultadoLimpa == false) {
        document.getElementById('tela').value += parametro;
    } else {
        document.getElementById('tela').value = null;
        document.getElementById('tela').value += parametro;
        resultadoLimpa = false;
    }
}

function limpar() {
    document.getElementById('tela').value = null;
}

function resultado() {
    try {
        let expressao = document.getElementById('tela').value;
        let resultado = eval(expressao);
        document.getElementById('tela').value = resultado;
    } catch (error) {
        document.getElementById('tela').value = "Error";
    }
    resultadoLimpa = true;
}