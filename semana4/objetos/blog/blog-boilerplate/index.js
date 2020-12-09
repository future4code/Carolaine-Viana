let blog = () => {
    //recebe os valores
    let tituloRecebe = document.getElementById('titulo-post')
    let autorRecebe = document.getElementById('autor-post')
    let conteudoRecebe = document.getElementById('conteudo-post')
    //mostra os valores
    const valores = {
        titulo: tituloRecebe.value,
        autor: autorRecebe.value,
        conteudo: conteudoRecebe.value,
    }

//array de todos os valores
const array = [valores.titulo, valores.autor, valores.conteudo]

//limpando os valores
tituloRecebe.value = ""
autorRecebe.value = ""
conteudoRecebe.value = ""

// console.log(array)

let conteudoFinal = document.getElementById('mostrar')
conteudoFinal.style.textAlign = 'center'
conteudoFinal.innerHTML =  `Titulo: <p>${array[0]}</p> Autor: <p>${array[1]}</p> Conteudo: <p>${array[2]}</p>`

}


