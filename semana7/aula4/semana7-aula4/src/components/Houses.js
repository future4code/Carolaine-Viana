import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const DivMain = styled.div`
    border: 1px solid white;
    margin: auto;
    width: 500px;
    text-align: center;
`

export default class Houses extends React.Component{

    state = {
        array: []
    }

    getHouses = () =>{
        const request = axios.get("https://www.anapioficeandfire.com/api/houses")
    
        .then(responde=>{
            alert('sucesso')
            this.setState({
                array: responde.data
            })
            console.log(responde.data)
        }).catch((error)=>{
            alert('nao foi gays')
        })
    
    }

    componentDidMount = () => {
        this.getHouses();
      };

    render(){
        return(
            <DivMain>
                <h1>HOUSES</h1>
                {this.state.array.map(p=>{
                    return(
                        <div>
                            <p>Nome: {p.name}</p>-
                            <p>Regiao: {p.region}</p>
                        </div>
                    )
                })}
            </DivMain>
        )
    }
}