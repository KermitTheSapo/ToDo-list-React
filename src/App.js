//Seu ToDo deve ter uma função para remover tarefa
//Seu ToDo deve adicionar tarefas com o click no button e também com a tecla ENTER
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
        <globalStyle/>
        <S.DivTitulo>
          <S.Titulo>To Do List</S.Titulo>
        </S.DivTitulo>
        <form onSubmit={(e) => e.preventDefault()} action="">
        <S.inputButton>
          <S.Escrever value={this.state.fazeres} onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Add</button>
          <button onClick={this.deleteAll}>Delete All</button>
        </S.inputButton>       
        </form> 
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