import styled, {createGlobalStyle} from "styled-components";

export const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing:0;
    }
`
export const inputButton = styled.div`
    display:flex;
    width:20%;
    height: 10%;
    justify-content: space-between;
    align-items:center;
    button{
        background-color: darkblue;
        border-radius: 5px;
        height: 5vh;
        width: 5vw;
        color: white;
        cursor: pointer;
    }
`

// text-decoration: line-through;

export const Titulo = styled.h1`
    font-size: 50px;
`
export const DivTitulo = styled.div`
    height: 10%;
    width: 90%;
    text-align:center;
`

export const Div = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 98vh;
  background-color: aquamarine;
`

export const CaixaUl = styled.ul `
  display: flex;
  height: 100%;
  width: 90%;
  justify-content:space-between;
  align-items: center;
`

export const DivMap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40%;
    width: 20%;
`

export const Lista = styled.li `
  list-style: none;
  font-size: 2vw;
`

export const Remove = styled.button`
    height: 3vh;
    width: 2vw;
    background-color: red;
    border-radius: 10px;
    cursor: pointer;
    color: white;
`
export const Check = styled.input`
    height: 3vh;
    width: 2vw;
    position: relative;
    right: 50px;
`

export const Escrever = styled.input`
    border-radius: 5px;
    width:8vw;
    height: 4vh;
    text-align:center;
    font-size: 25px;
`

export const Map = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100%;
    width: 100%;
`