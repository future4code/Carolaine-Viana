import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto: "Almocar",
        completa: true
      },
    {
      id: Date.now(),
      texto: "Ler",
      completa: false
    }],
      inputValue: '',
      filtro: 'Completa'
    }

  componentDidUpdate() {
      const trf = this.state.tarefas
      localStorage.setItem("tarefas", JSON.stringify(trf))
  };

  //usar o get item
  componentDidMount() {
      const transfString = localStorage.getItem("tarefas")
      const transfObjeto = JSON.parse(transfString)
      if(transfObjeto){
        this.setState({
          tarefas: transfObjeto
        })
      }
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
    console.log(this.state.inputValue)
  }

  criaTarefa = () => {
      const novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      }
      console.log(this.state.tarefas)
      //dentro do array de tarefas, sera adicionado o nova tarefas
      const copiaDoEstado = [novaTarefa, ...this.state.tarefas]
        this.setState({
          tarefas: copiaDoEstado
      })
      this.setState({
        inputValue: ''
      })
  }

  //se o id que vc ta usando agora (apelidado de p for de fato
  //o que vc quer alterar...
  selectTarefa = (id) => {
    const checaTarefa = this.state.tarefas.map(p =>{
      if(id === p.id){
          const novoTeste = {
            ...p,
            completa: !p.completa
          }
          return novoTeste
      }else{
        return p
      }
    }
    )
    this.setState({
      tarefas: checaTarefa
    })
  }

  onChangeFilter = (event) => {
      this.setState({
        filtro: event.target.value
      })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
