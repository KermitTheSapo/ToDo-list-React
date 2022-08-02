import React, { Component } from "react"
import styled from "styled-components"

const Div = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid black 1px;
  height: 80vh;
`

const CaixaUl = styled.ul `
  display: flex;
`

const Lista = styled.li `
  list-style: none;
`

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

  limpar = () => {
    this.setState({
      fazeres: ""
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
      })
    },
    this.limpar())
  }

  // remove = () => {
  //   this.setState({
  //     historico: this.state.historico.pop("")
  //   })
  // }



  render(){
    return(
      <Div>
        <h1>To Do List</h1>
        <input value={this.state.fazeres} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add</button>
        <button onClick={this.remove}>Remove</button>
        <div>
          {this.state.historico.map((item) => (
            <CaixaUl>
              <input type="checkbox"></input>
              <Lista>{item.fazeres}</Lista>
            </CaixaUl>
          ))}
        </div>
      </Div>
    )
  }
}