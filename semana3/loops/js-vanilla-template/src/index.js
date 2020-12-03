//1)
//console.log("a. ", false)

//console.log("b. ", false)

//console.log("c. ", true)

//console.log("e. ", boolean)


//2
// console.log('a. ', undefined)

//console.log('b. ', null)

// console.log('c. ', 11)

// console.log('d. ', 3)

// console.log('e. ', 11)

// console.log('f. ', 9)


//**Exercícios de escrita de código**

//1 Faça um programa que:
//a) Pergunte a idade do usuário

idade = prompt("Digite a sua idade")

const idadeNew = Number(idade)

//b) Pergunte a idade do seu melhor amigo ou amiga

idadeAmigo = prompt("Digite a idade do seu melhor amigo(a)")

const idadeAmigoNew = Number(idadeAmigo)

// c. Imprima na tela a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)

console.log("Sua idade é maior do que a do seu melho amigo?")
console.log(true)

// d. Imprima na tela a diferença de idade (não tem problema se sair um número negativo)

console.log(idadeNew-idadeAmigoNew)

//2) Faça um programa que:
//a) peca ao usuario que insira um numero par

par = prompt("Digite um numero PAR!")

console.log(par%2)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Resposta:

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// Resposta:

//3) Faça um programa, seguindo os passos:
// a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

let listaDeTarefas = []

tarefa1 = prompt("Digite uma tarefa que voce realiza no dia a dia")
tarefa2 = prompt("Digite outra tarefa que voce realiza no dia a dia")
tarefa3 = prompt("Digite a ultima tarefa que voce realiza no dia a dia")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

indice = prompt("digite o indice de uma tarefa realizada [0, 1, 2]: ")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)

// 4) Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

nomeDoUsuario = prompt("digite seu nome")
emailDoUsuario = prompt("digite seu e-mail")

console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o)!", nomeDoUsuario)


// ********** CONDICIONAIS ****************** //

// EX 01:

//Resposta: está verificando se o numero digitado pelo usuario é tem resto da divisao em 0, como os numeros pares por exemplo.
//e se for o caso, cai no primeiro if saindo "VC PASSOU NO TESTE!".
//se nao, se o numero digitado tiver o resto da divisao acima de 0,
//cai no ultimo if, "VOCE NAO PASSOU NO TESTE".



//EXERCÍCIO 2
//Resposta: A) serve como um menu de precos para frutas. digite a fruta e saira o preco automaticamnte pre-definido.
//Resposta: B)  "O preco da fruta Maçã é 2.25"
//Resposta: C) "O preco da fruta Pêra é 5"


// EXERCICIO 3
//Resposta: A) criando uma variavel chamada Number, convertida para Number no JS. E pedindo
//para o usuario digitar um numero.

//Resposta: B) se o usuario digitou 10 a mensagem seria: "esse numero pasou no teste!" e "essa mensagem é secreta!"
///caso ele tenha digitado -10, nao apareceria nada. porque a condicao é acima de 0. sendo assim, num positivos.
//Resposta: C) nao haveria erro, apenas nao iria entrar em bloco ou condicao alguma. seria como se com o -10 a mensagem 
//nao passa-se por condicao nenhuma, pois esta nao existe.


//EXERCICIO 4:

// ** EXERCICIOS DE ESCRITA DE CODIGO ** //

idade2 = Number(prompt("Digite sua idade"))

if(idade2 >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("Você nao pode dirigir")
}

//EXERICIO 5:

turno = prompt("digite a letra do turno que voce estuda (em CAPSLOCK): [M] = Matutino, [V] = VESPETINO, [N] = NOTURNO")

if (turno === "M"){
    console.log("Bom dia!")
}
else if(turno === "V"){
    console.log("Boa tarde")
}
else if(turno === "N"){
    console.log("Boa noite!")
}

//EXERCÍCIO 6
// Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

turno2 = prompt("digite a letra do turno que voce estuda (em CAPSLOCK): [M] = Matutino, [V] = VESPETINO, [N] = NOTURNO")

switch(turno2){
    case 'M':
        console.log("Bom dia!")
        break;
    case 'V':
        console.log("Boa tarde!")
       break;
    case 'N':
        console.log("Boa noite!")
        break; 
}

//EXERCÍCIO 7 && DESAFIO 01

genero = prompt("Digite o genero do filme que irá assistir")
ingresso = Number(prompt("Digite o valor do ingresso"))
snack = prompt("Qual SNACK voce quer comprar?")

if(genero === "Fantasia" && ingresso <=15){
    console.log("Bom filme! com", snack)
}else{
    console.log("Escolha outro filme!")
}

////EXERCÍCIO 7 && DESAFIO 02
console.log("---Dados da compra----")
nomeCliente = prompt("Digite seu nome:")
console.log("Nome do cliente:", nomeCliente)
tipojogo = prompt("Nacional ou Internacional?")
console.log("Tipo de jogo:", tipojogo)
etapajogo = prompt("Etapa de jogo: SF - Semifinais, DT - Decisao do 3 lugar, FI - Final")
categoria = Number(prompt("Digite a categoria: [1] [2] [3] [4]"))
console.log("Categoria:", categoria)
quantidade = prompt("Quantidade de ingressos")
console.log("---Valores---")


switch(etapajogo){
    case 'SF':
        if(categoria===1 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(1320)
            console.log("Valor do ingresso:", valor)
            let total = quantidade * valor
            console.log("Valor total:", total)
        }else if(categoria===1 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            valor = Number(1320/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
        else if(categoria===2 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(880)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }else if(categoria===2 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            valor = Number(880/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
        else if(categoria===3 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(550)
            console.log("Valor do ingresso:", valor)
            let total = quantidade * valor
            console.log("Valor total:", total)
        }else if(categoria===3 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(550/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
        else if(categoria==4 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(220)
            console.log("Valor do ingresso:", valor)
            let total = quantidade * valor
            console.log("Valor total:", total)
        }
        else if(categoria==4 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(220/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
        break
    case 'DT':
        if(categoria===1 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(1660)
            console.log("Valor do ingresso:", valor)
            let total = quantidade * valor
            console.log("Valor total:", total)
        }else if(categoria===1 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(1660/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
        else if(categoria===2 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(440)
            console.log("Valor do ingresso:", valor)
            let total = quantidade * valor
            console.log("Valor total:", total)
        }
        else if(categoria===2 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(440/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
        else if(categoria===3 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(330)
            console.log("Valor do ingresso:", valor)
            let total = quantidade * valor
            console.log("Valor total:", total)
        }else if(categoria===3 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(330/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
        else if(categoria==4 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(170)
            console.log("Valor do ingresso:", valor)
            let total = quantidade * valor
            console.log("Valor total:", total)
        }else if(categoria==4 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(170/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
       break;
    case 'FI':
        if(categoria===1 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(1980)
            console.log("Valor do ingresso:", valor)
            let total = quantidade * valor
            console.log("Valor total:", total)
        }else if(categoria===1 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(1980/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
        else if(categoria===2 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(1320)
            console.log("Valor do ingresso:", valor)
            let total = quantidade * valor
            console.log("Valor total:", total)
        }else if(categoria===2 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(1320/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
        else if(categoria===3 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(880)
            console.log("Valor do ingresso:", valor)
            let total = quantidade * valor
            console.log("Valor total:", total)
        } else if(categoria===3 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(880/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
        
        else if(categoria==4 && tipojogo==='Nacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(330)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }else if(categoria==4 && tipojogo==='Internacional'){
            console.log("Etapa do jogo", etapajogo)
            let valor = Number(330/4.10)
            console.log("Valor do ingresso:", valor)
            let total = Math.round(quantidade * valor)
            console.log("Valor total:", total)
        }
        break
}

// AULA DE LOPPING //

//ex 01
//Resposta: 10

//ex 02
//Resposta A): 19, 21, 23, 25, 27, 30
//Resposta B): RESPONDER


// *** **Exercícios de escrita de código** //

//EXERCICIO 3

//A) Imprima cada um dos valores do array original.

let array_1 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
console.log(array_1)


//B) Imprima cada um dos valores do array original divididos por 10

let divisao = 0

for(i=0; i<=12; i++){
    divisao=array_1[i]/10
    console.log(divisao)

}
// console.log("total", soma/10)


//C) Crie um novo array contendo, somente, os números pares do array original. Imprima esse novo array
let novo_array = []
for(let num of array_1){
    if(num % 2 ==0){
        novo_array.push(num)
    }
}

console.log("Novos arrays so de pares: ", novo_array)


//D) Crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

let array_strings = ["banana", "televisao", "agua", "verde"]

for(i=0; i<=3; i++){
    console.log("O elemento index", i, array_strings[i])
}

//E) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let maior = 0
let menor = array_1[0]
for(let num of array_1){
    if(num > maior){
        maior = num
    }else if(num < menor){
        menor = num
    }
}

console.log("Maior numero", maior)
console.log("Menor numero", menor)

//DESAFIO 01

jogador1 = Number(prompt("Escolha um número entre 0 e 10."))
alert("VAMOS JOGAR!")
jogador2 = Number(prompt("Jogador 2: tente acertar o número digitado entre 0 a 10."))

console.log("o numero chutado foi", jogador2)

if(jogador1 > jogador2){
    console.log("ERROU! O numero escolhido foi MAIOR.")
}else if(jogador2 > jogador1){
    console.log("ERROU! O numero escolhido foi MENOR")
}else if(jogador1 === jogador2){
    console.log("ACERTOU!!!!!")
}


//DESAFIO 02

computador = Math.floor(Math.random() * 100);

usuario = Number(prompt("Tente acertar o numero digitado pelo computador"))

if(computador > usuario){
    console.log("ERROU! O numero escolhido pelo computador foi MAIOR")
}else if(computador > usuario){
    console.log("ERROU! O numero escolhido pelo computador foi MENOR")
}else if(computador===usuario){
    console.log("ACERTOU!!!!!!")
}
