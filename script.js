function contarVogais() {

    var vogais = 'a,e,i,o,u,A,E,I,O,U';
    var texto = document.getElementById("palavra").value;
    var cont = 0;
    for (var i = 0; i < texto.length; i++) {
        if (vogais.indexOf(texto[i]) !== -1) {
            cont++;
        }
    }
    document.getElementById("resultado").innerText = "Numero de vogais: " + cont;    
}

function contarMaiusculas() {
    // var maiusculas = 'ZXCVBNMASDFGHJKLQWERTYUIOP';
    var texto = document.getElementById("palavra2").value;
    var cont = 0;
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] >= 'A' && texto[i] <= 'Z') {
            cont++;
        }
    }
    document.getElementById("resultado2").innerText = "Numero de Maiusculas: " + cont;
    console.log;   
}

function contarPalavras() {
    var texto = document.getElementById("palavras").value;
    var palavras = texto.trim().split(/\s+/);
    var numeroPalavras = palavras.length; 
   
    document.getElementById("resultado3").innerText = "Numero de Palavras: " + numeroPalavras;
    console.log;   
}

function verificarPalindromo() {
    var textoPalindromo = document.getElementById("palindromo").value;
    var textoSemEspacos = textoPalindromo.toLowerCase().replace(/\s/g,'');
    var textoInvertido = textoSemEspacos.split('').reverse().join('');
    var resultado4 = textoSemEspacos === textoInvertido ? "Sim, é um palíndromo!" : "Não é um palíndromo.";

    document.getElementById("resultado4").innerText = resultado4;
}

function concatenarNomes() {
    var nome1 = document.getElementById("nome1").value;
    var nome2 = document.getElementById("nome2").value;
    var nomeConca = nome1 + '' + nome2;

   document.getElementById("resultado5").innerText = "Os nome concatenados: " + nomeConca;
}
