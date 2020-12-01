//1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    // a = 10
    // b = 10
    // console.log(b)

    // b = 5
    // console.log(a, b)


//resposta: 10, 5.

// 2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

    // a = 10
    // b = 20
    // c = a
    // b = c
    // a = b

    // console.log(a, b, c)

//resposta: 10, 10, 10

// A) Declare uma variável para armazenar um nome, sem atribuir um valor.

let nome

// B) Declare uma variável para armazenar uma idade, sem atribuir um valor.

let idade

// C) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

console.log(typeof nome, typeof idade)

// D) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

//Resposta: porque nao foi colocado um valor para essa variavel. ela está vazia por isso quando é impresso traz indefnided como resposta.

// E) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")

// Dica: se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

// F) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log(typeof nome, typeof idade)

//Resposta: notei que as variaveis de idade, continuam recebendo o valor de string, aparentemente o java script 
//nao identificou que foi um numero digitado.


//G) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
// Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
// console.log(valor1, valor2)

console.log("Olá " + nome + " voce tem " + idade + " anos")


// 2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). Imprima-as com as respostas no console da seguinte forma:
    // 1. Qual o seu endereço?
    // Resposta: Rua ABC, 123

    // 2. Qual a sua cor favorita?
    // Resposta: Azul

serie = prompt("Qual sua serie favorita?")
musica = prompt("Qual sua musica favorita?")
pessoa = prompt("Qual sua pessoa favorita do mundo?")
cor = prompt("Qual sua cor favorita?")
tecnologia = prompt("Qual sua tecnologia favorita?")

console.log("1. Qual sua serie favorita: ")
console.log("Resposta: " + serie)
console.log("2. Qual sua musica favorita?: ")
console.log("Resposta: " + musica)
console.log("3. Qual sua cor favorita?: ")
console.log("Resposta: " + cor)
console.log("2. Qual sua tecnologia favorita?: ")
console.log("Resposta: " + tecnologia)


// 3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

let comida = ["Pizza", "Sorvete", "Hamburguer", "Batata-frita", "Coca-cola"]

// A) Imprima na tela o array completo

console.log(comida)

// B) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

console.log("Essas sao minhas comidas preferidas: ")
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

// C) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

usuario_fav = prompt("Digite sua comida preferida: ")

comida[1] = usuario_fav

console.log(comida)

// 4. Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

    // a) Crie uma nova variável, contendo um array com as respostas. Utilize o tipo booleano para cada resposta.
    // b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
    // "Você está usando uma roupa azul hoje?" true

let perguntas = ["Você esta de bom humor hoje?", "Você ja almocou?", "Já pensou em desistir de programar hoje?"]

let respostas = ["False", "True", "False"]

console.log(perguntas)
console.log(respostas)