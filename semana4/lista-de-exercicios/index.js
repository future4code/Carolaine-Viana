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

//EX 1
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


//EX 2

//A) false
//B) false
//C) true
//D) true
//E) true


//EX 3

// RESPOSTA:

// const quantidadeDeNumerosPares
// let i = 0
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
// }

//EX 4

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


//EX 5

function maior(num1, num2){
    if(num1 > num2){
        console.log("maior", num1)
    }else{
        console.log("maior", num2)
    }

    //divisao um pelo outro
    if(num1 % num2 === 0){
        console.log(`${num1} é divisivel por ${num2}`)
        let sub = Math.abs(num2-num1)
        console.log("a diferenca entre eles e ", sub)
    }else{
        console.log(`${num1} nao é divisivel por ${num2}`)
        let sub = Math.abs(num2-num1)
        console.log("a diferenca entre eles e ", sub)
    }

}

maior(15, 30)

//EX 6 ** Exercícios de Funções ***

//1)

// let array = [10, 20, 50, 88]
maior = 0
let menor = 999
const teste = [
    {array: [10, 20, 88]}
]

const segundoMaior = teste.map((teste, index, lista)=>{
    console.log(teste.array[2])
    if(teste.array > maior){
        maior = teste.array
        console.log(maior)
    }
})

// 2)

const mensagem = () => {
    alert("HELLO LABENU!")
}

mensagem()


//EX 7 ** Exercícios de Objetos ***

//1
//RESPOSTA: arrays sao listas, e objetos eu imagino como um cardapio ou menu. onde vc separa as coisas pelo contexto delas
//objeto de pessoas: tem idade, nome, cpf, data de nascimento. 
//objeto de comida tem: nome da comida, preco, do que é feito. etc.
//arrays seriam a lista de coisas que ficaram dentro desse cardapio por ex: lasanha, hamburgue, batata frita etc.
//e onde podemos utilizar esta no exemplo acima, em restaurante, ou para pegar dados pessoais de alguem.


//2)

function criaRetangulo(lado1, lado2){
    let largura = (2 * (lado1 + lado2))
    let area = (lado1*lado2)
    console.log("largura:", largura)
    console.log("altura", area)
}
criaRetangulo(2, 5)

//3

const filme = {
    titulo: 'interstellar',
    ano: 2014,
    diretor: 'Christopher Nolan',
    atores_atrizes: ['Matthew McConaughey', 'Anne Hathaway']
}

console.log(`Venha asssistir ao filme ${filme.titulo} de ${filme.ano}, dirigido pelo ${filme.diretor} e estrelado por: ${filme.atores_atrizes[0]}, ${filme.atores_atrizes[1]}`)