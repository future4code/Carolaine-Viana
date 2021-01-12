import React from 'react';
import styled from 'styled-components';

const DivResultado = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid black;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 10px;
`
const DivCaixa = styled.div`
    width: 300px;
    height: 50px;
    border: 1px solid black;
    margin: auto;
`

const DivDeletar = styled.button`
    width: 50px;
    height: 10px;

`

class Lista extends React.Component{  
    render(){
        console.log(this.props.listaUsuario)
        const mapear = this.props.listaUsuario.map(p=>{
            return(
                <DivCaixa>
                    <strong>Usuário: </strong>{p.name}
                    <DivDeletar onClick={()=>{this.props.excluirUsuario(p)}}>Deletar</DivDeletar>
                </DivCaixa>
            )
        })
        return(
            <DivResultado>
                {mapear}
            </DivResultado>
        )
    }
}

export default Lista;