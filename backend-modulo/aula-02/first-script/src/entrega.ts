// *********** EXERCICIO LETRA 1 LETRA C *************** //


type person_2 = {
    nome: string,
    idade: number,
    corFavorita: string
}

const person_1: person_2 = {
    nome: "Carolaine",
    idade: 23,
    corFavorita: "preto"
}

const person_2: person_2 = {
    nome: "Jose",
    idade: 30,
    corFavorita: "Rosa"
}

const person_3: person_2 = {
    nome: "Douglas",
    idade: 40,
    corFavorita: "Roxo"
}

// console.log(person1, person2, person3)


// *********** EXERCICIO LETRA 1 LETRA D *************** //


enum TIPO_CORES { //sem o "= violeta" ele vai setar 0, 1, 2, 3 aos valores. 
    violeta = "violeta",
    anil = "anil",
    azul = "azul",
    verde = "verde",
    amarelo = "amarelo",
    laranja = "laranja",
    vermelho = "vermelho"
}


type person = {
    nome: string,
    idade: number,
    corFavorita: TIPO_CORES
}

const person1: person = {
    nome: "Carolaine",
    idade: 23,
    corFavorita: TIPO_CORES.amarelo
}

const person2: person = {
    nome: "Jose",
    idade: 30,
    corFavorita: TIPO_CORES.anil
}

const person3: person = {
    nome: "Douglas",
    idade: 40,
    corFavorita: TIPO_CORES.azul
}

console.log(person1, person2, person3)

// *********** EXERCICIO 2 LETRA A *************** //

function obterEstatisticas(numeros: any) {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


// ******* EXERCICIO 2 LETRA B ****************** //


// b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas

//RESPOSTA = ARRAYS

// ******* EXERCICIO 2 LETRA C ****************** //


// c. Crie um *type* para representar uma **amostra** de dados, isto é, um objeto com as chaves **numeros** e **obterEstatisticas**. Abaixo,
// temos um exemplo de objeto desse tipo, declarado em JavaScript:

type amostraDeIdades = {

    numeros: number [],
    obterEstatisticas: (numeros:number []) => estatisticas
}

type estatisticas = {
    maior: number,
    menor: number,
    media: number
}

// ******* EXERCICIO 3 LETRA A ****************** //


//Considere que você esteja implementando uma rede social composta por posts de usuários.
// Cada um dos posts possui: um autor e um texto.

type instagram = {
    autor: string,
    texto: string
}

const posts: instagram[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver",
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!",
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!",
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]
  
// ******* EXERCICIO 3 LETRA B ****************** //
  
//b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
//Quais são as entradas e saídas dessa função? Copie a função
//para o mesmo arquivo .ts do array de posts e faça a tipagem necessária.  

  
function buscarPostsPorAutor(
    posts: instagram[],
    autorInformado: string,
)   {
    if(autorInformado === undefined){
        return posts
    }
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
}