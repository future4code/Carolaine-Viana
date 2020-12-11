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

//4)

const pessoa = {
    nome: 'Carolaine',
    idade: 23,
    email: 'carolsantos14@hotmail.com',
    endereco: 'ABC 123'
}

function anonimizarPessoa(){
    const novoObjeto = {
        ...pessoa,
        nome: 'Anonimo',
    }
    console.log(novoObjeto)
}

anonimizarPessoa()

// ** Exercícios de Funções de array *** 

//1

const pesssoas2 = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]


// a) Faça uma função que retorne um **novo array** só com os adultos (pessoas com idade igual ou superior a 20)


const maioresIdade = pesssoas2.filter((maior, index, array) => {
    if(maior.idade >=20){
        return maior.nome
    }
})

console.log(maioresIdade)

//b) Faça uma função que retorne um **novo array** só com as crianças/adolescentes (pessoas com idade inferior a 20)

const menoresIdade = pesssoas2.filter((menor, index, array) =>{
    if(menor.idade<20){
        return menor.nome
    }
})

console.log(menoresIdade)


//2

//A) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2. Isto é `[2, 4, 6, 8, 10, 12]`.

const array = [1, 2, 3, 4, 5, 6]

for(index in array){
    console.log("Multiplicado por 2", index*2)
}

//B Escreva uma função que **retorne** um array com as entradas multiplicadas por 3 e como strings. Isto é: `["3", "6", "9", "15", "18"]`
// let calc = []
// for(index in array){
//     calc.push(index*3)
//     console.log(calc)

// }


//C

// for(index in array){
//     if(index%2==0){
//         console.log('é par', index)
//     }else{
//         console.log('é impar', index)
//     }
// }


//3

const pessoas3 = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]


// A) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **tem permissão de entrar** no brinquedo

let novoarray = []
let novoarray2 = []

const podeEntrar = pessoas3.filter((pode, index, array) =>{
    if(pode.altura >= 1.5 && pode.idade >= 14 && pode.idade <=60){
        novoarray.push(pode.nome)
    }else{
        novoarray2.push(pode.nome)
    }
})

console.log(novoarray)

// B) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **não podem entrar** no brinquedo.

console.log(novoarray2)


//4


const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const aiaiai = consultas.filter((msg, index, list)=>{
    if(msg.cancelada === 'true' && msg.genero === 'masculino'){
        console.log(`Olá, Sr ${msg.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${msg.dataDaConsulta}. Por fvor, acuse o recebimento do e-mail.`)
    }else if(msg.cancelada === 'false' && msg.genero === 'feminino'){
        console.log(`Olá, Sra ${msg.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${msg.dataDaConsulta}. Por fvor, acuse o recebimento do e-mail.`)
    }
})



