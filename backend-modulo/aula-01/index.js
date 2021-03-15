// a) **Responda como comentário no seu código:**
//como fazemos para acessar os parâmetros passados na
//linha de comando para o Node?

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:


//forma 01
// process.argv[2] = "Carol"
// process.argv[3] = 23

// //forma 02
// const nome = "Carol"
// const idade = Number(23)

//forma 01
// console.log(`Olá, ${process.argv[2]}, 
// Você tem ${process.argv[3]} anos.`);

//forma 02

// console.log(`Olá, ${nome}, 
// Você tem ${idade} anos.`);

// // c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

// process.argv[4] = Number("7")
// process.argv[5] = Number(process.argv[3] + process.argv[4])


// console.log(`Olá, ${process.argv[2]}, 
// Você tem ${process.argv[3]} anos. Daqui a 7 anos terá ${process.argv[5]}.`);

// 2) Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.


const operacao = process.argv[2]

//forma 01
// process.argv[3] = Number("7")
// process.argv[4] = Number("1")

//forma 02
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

console.log(operacao)

switch(operacao){
	case "add":
	    //forma 1
		console.log(`A soma dos valores = ${n1 + n1}`)
		//forma dois
        console.log(process.argv[3] + process.argv[4])
		break;
	case "subt":
		console.log(`${n1 - n1}`)
		break;
	case "mult":
	    console.log(`${n1 * n2}`)
	    break
	case "div":
	    console.log(`${n1 / n2}`)
	    break;
	default: 
	    console.log("nao rolou")
}


// tarefas: [
// 	"Lavar a louça",
// 	"Comprar Leite"
// ]


