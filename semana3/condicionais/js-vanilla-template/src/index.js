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