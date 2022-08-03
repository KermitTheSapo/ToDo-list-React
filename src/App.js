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
  
  // handleKeyPress = (event) => {
  //   this.setState({
  //     fazeres: event.key,
  //   })
  //   if (this.fazeres === "Enter") {
  //     console.log("aaaaaa")
  //   }
  // }

  handleClick = () => {
    this.setState({
      historico: this.state.historico.concat({
        fazeres: this.state.fazeres,
        id: Date.now()
      }),
      fazeres: ""
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
        <S.inputButton>
          <S.Escrever value={this.state.fazeres} onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Add</button>
        </S.inputButton>        
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