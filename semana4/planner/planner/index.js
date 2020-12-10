document.getElementById("botao").addEventListener("click", tarefa)

function tarefa(){
    //valor do select
    const diasemana = document.getElementById('dias-semana')
    const diassemanaValue = diasemana.value
    //tarefa = valor do imput
    const tarefa = document.getElementById('tarefa')
    const tarefavalue = tarefa.value
    console.log(tarefavalue)

    //qual div vou querer escrever dentro
    const div = document.getElementById(diassemanaValue)
    div.innerHTML += `<p>${tarefavalue}</p>`
}
