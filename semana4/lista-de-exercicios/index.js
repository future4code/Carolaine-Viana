// Faça um commit a cada exercício concluído.


// ***** # Lista de Exercícios: ***** ///

// 1)
// conversao do dolar para reais. nesse caso sao 100 reais, convertendo para dolar.

// 2)
// nesse exemplo, está demonstrando a taxa de rendimento de investimentos variados. como, poupanca, renda fixa etc..
//entao depdendo do valor investido, e do investimento escolhido, ira render x. no dofault diz se nenhuma opcao valida por escolhida
// aquela mensagem ira aparecer: tipo de investimento informado incorreto.
// os proximos const, sao a escolha que o usuario fez de investir, naquele caso do novomontante, 150 reais em acoes.
// e depois segundo montante, 200 reais em tesouro direto.
//apos isso ira imprimir.

//3)
// se o array de numero conter elemento pares, o array1 que esta vazio vai receber esses valores (pares) encontrados.
// se nao, o arra2 que tbm esta vazio, contera os arrays impares.

//4
// se o numero do array de numero for MENOR que o numero inifinito dentro da variavel number1
// essa variavel de num infinito vai receber esse numero agora. 


//se o numero do array de numero for maior que a variavel numero que contem 0, essa variavel que contem 0 agora vai receber esse numero.


//no console log sera impresso os numeros da variavel num1 e num2.


// *** EXERCICIOS DE LOGICA DE PROGRAMACAO *** ///

//1
// FOR EACH, MAP, FILTER.
const dinheiroContaFamilia = [
    {nome: "Carolaine", tipoConta: "corrente", valor: 50000000},
    {nome: "MinhaMae", tipoConta: "poupanca", valor: 10000000000},
    {nome: "MinhaIrma", tipoConta: "corrente", valor: 0}
]

dinheiroContaFamilia.forEach((nome) => {
    nome.valor = 3803023293020423
    console.log(nome.valor)
})

console.log(dinheiroContaFamilia)


//2

//A) false
//B) false
//C) true
//D) true
//E) true


//3

// RESPOSTA:

// const quantidadeDeNumerosPares
// let i = 0
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
// }

//4

function triangulo(n1, n2, n3){
    if(n1 === n2 && n2 === n3){
        console.log("Equilátero")
    }else if(n1 === n2 || n2 === n3){
        console.log("Isósceles")
    }else if(n1 !== n2 || n2 !== n3){
        console.log("Escaleno")
    }
}

triangulo(1, 2, 5)
