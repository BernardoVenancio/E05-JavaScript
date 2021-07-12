
//JavaScript: Conceitos Básicos
//Atividade Desenhando Triangulo
function triangulo(nLinhas){
    console.log("****Desenhando um triângulo****")
    for(i = 0; i < nLinhas; i++){
        var jogoDaVelha = "";
        for(j = 0; j <= i ; j++){
            jogoDaVelha += "#";
        }
        console.log(jogoDaVelha);
    }   
}
//var nLinhas = prompt("Desenhando um triangulo - Quantas linhas terá o triangulo? ");
//triangulo(nLinhas);

function xadrex(nLinhas){
    console.log("Desenhando um tabuleiro");
    var jogoDaVelha ="# # # #";
    for (i = 0; i < nLinhas ; i++){
        if(!(i % 2)){
            console.log(jogoDaVelha);
        }else{
            console.log(" " + jogoDaVelha);
        }
    }
}
//var nLinhas = prompt("Desenhando um tabuleiro - Quantas linhas terá o tabuleiro? ");
//xadrex(nLinhas);

function ehPalindromo(palavra){
    //separa a string por "" para inverter os caracteres usando o reverse, e depois usa join para reagrupar sem os ""
    var clone = palavra.split("").reverse().join("");
    
    //Transforma as strings em minusculas para que não haja erro na hora de comparar
    if(palavra.toLowerCase() === clone.toLowerCase()){
        console.log("A palavra %s é um Palíndromo",palavra);
    }else{
        console.log("A palavra %s não é um Palíndromo",palavra);
    }

}

//var palavra = prompt("Digite uma palavra para conferir se ela é um Palíndromo: ")
//ehPalindromo(palavra)

function imprimeNumeros(number){
    for(i = 0; i <= number; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 == 0){
            console.log("Fizz");
        }
        else if(i % 5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}
//var number = 100;
//imprimeNumeros(number);

// **************************************************************************************
//JavaScript: Funções

function min(a,b){
    return Math.min(a,b);
}
function max(a,b){
    return Math.max(a,b);
}

var number1 = prompt("Digite o primeiro número: ");
var number2 = prompt("Digite o segundo número: ")
console.log("O menor número entre os dois é: " + min(number1,number2));
console.log("O maior número entre os dois é: " + max(number1,number2))