"use strict";
const person_1 = {
    nome: "Carolaine",
    idade: 23,
    corFavorita: "preto"
};
const person_2 = {
    nome: "Jose",
    idade: 30,
    corFavorita: "Rosa"
};
const person_3 = {
    nome: "Douglas",
    idade: 40,
    corFavorita: "Roxo"
};
var TIPO_CORES;
(function (TIPO_CORES) {
    TIPO_CORES["violeta"] = "violeta";
    TIPO_CORES["anil"] = "anil";
    TIPO_CORES["azul"] = "azul";
    TIPO_CORES["verde"] = "verde";
    TIPO_CORES["amarelo"] = "amarelo";
    TIPO_CORES["laranja"] = "laranja";
    TIPO_CORES["vermelho"] = "vermelho";
})(TIPO_CORES || (TIPO_CORES = {}));
const person1 = {
    nome: "Carolaine",
    idade: 23,
    corFavorita: TIPO_CORES.amarelo
};
const person2 = {
    nome: "Jose",
    idade: 30,
    corFavorita: TIPO_CORES.anil
};
const person3 = {
    nome: "Douglas",
    idade: 40,
    corFavorita: TIPO_CORES.azul
};
console.log(person1, person2, person3);
function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
const posts = [
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
];
function buscarPostsPorAutor(posts, autorInformado) {
    if (autorInformado === undefined) {
        return posts;
    }
    return posts.filter((post) => {
        return post.autor === autorInformado;
    });
}
