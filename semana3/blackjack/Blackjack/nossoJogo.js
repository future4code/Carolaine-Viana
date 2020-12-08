/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")

iniciar = confirm("Quer iniciar uma nova rodada?")

const carta = comprarCarta(); 

let user = []
let computer = []
let soma_u = 0
let soma_c = 0


 if(iniciar === true){
      //usuario
      user.push(comprarCarta())
      user.push(comprarCarta())
      soma_u = user[0].valor + user[1].valor
      console.log("Usuário - cartas: ", user[0].texto, user[1].texto, "Pontuacao: ", soma_u)
      //computador
      computer.push(comprarCarta())
      computer.push(comprarCarta())
      soma_c = computer[0].valor + computer[1].valor
      console.log("Computador - cartas: ", computer[0].texto, computer[1].texto, "Pontuacao: ", soma_c)

 }else{
    console.log("O jogo acabou!")
 }

//if das pontuacoes
 if(soma_u > soma_c){
    console.log("O usuário ganhou!")
 }else if(soma_c > soma_u){
    console.log("O computador ganhou!")
 }else if(soma_u === soma_c){
    console.log("Empate!")
 }


 
 