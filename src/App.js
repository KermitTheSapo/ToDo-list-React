import React, { Component } from "react"
import * as S from "./components/style.js"

export default class ToDo extends Component {
  state = {
    fazeres: "",
    historico: []
  }

  handleChange = (event) => {
    this.setState({
      fazeres: event.target.value
    })
  }  
  
  handleClick = () => {
    if (this.state.fazeres !== "") {
      this.setState({
        historico: this.state.historico.concat({
          fazeres: this.state.fazeres,
          id: Date.now()
        }),
        fazeres: ""
      })
    }
  }

  deleteAll = () => {
    this.setState({
      historico: this.state.historico.filter((item) => item.historico)
    })
  }

  remove = (id) => {
    this.setState({
      historico: this.state.historico.filter((item) => (item.id !== id))
    })
  }

  render(){
    return(
      <S.Div>
        <S.globalStyle/>
        <S.DivTitulo>
          <S.Titulo>To Do List</S.Titulo>
        </S.DivTitulo>
        <S.Form onSubmit={(e) => e.preventDefault()} action="">
          <S.inputButton>
            <S.EnglobaInput>
              <S.Escrever value={this.state.fazeres} onChange={this.handleChange}/>
            </S.EnglobaInput>
            <S.Adicionar onClick={this.handleClick}>Add</S.Adicionar>
            <S.Delete onClick={this.deleteAll}>Delete All</S.Delete>
          </S.inputButton>       
        </S.Form> 
        <S.DivMap>
          <S.Map>{this.state.historico.map((item) => (
            <S.CaixaUl>
              <S.Check type="checkbox"></S.Check>
              <S.Lista>{item.fazeres}</S.Lista>
              <S.Remove onClick={() => {this.remove(item.id)}}>X</S.Remove>
            </S.CaixaUl>
          ))}</S.Map>
        </S.DivMap>
      </S.Div>
    )
  }
}