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

