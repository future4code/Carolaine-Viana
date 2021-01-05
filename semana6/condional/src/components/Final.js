import React from 'react'
import styled from 'styled-components'

const DivMain = styled.div`
    text-align: center;
`

export class Final extends React.Component{
    render(){
        return(
        <DivMain>
            <h2>O FORMULÁRIO ACABOU</h2>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </DivMain>
        )
    }
}

export default Final;