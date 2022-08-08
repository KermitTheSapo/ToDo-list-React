import styled, {createGlobalStyle} from "styled-components";

export const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing:0;
        background-color: aquamarine;
    }
`
export const inputButton = styled.div`
    display:flex;
    width:100%;
    height: 100%;
    justify-content: space-between;
    align-items:center;
    button{
        background-color: darkblue;
        border-radius: 5px;
        height: 5vh;
        width: 5vw;
        color: white;
        cursor: pointer;
        @media (max-width: 425px) {
            height: 4vh;
            width: 10vw;
        }
    }
`

// text-decoration: line-through;

export const Titulo = styled.h1`
    font-size: 2.3vw;
    height: 100%;
    width: 100%;
    @media (max-width: 425px) {
        font-size: 5vw;
    }
`
export const DivTitulo = styled.div`
    height: 15%;
    width: 90%;
    text-align:center;
    display: flex;
    justify-content:center;
    align-items: flex-start;
`

export const Div = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
    width: 40%;
    @media (max-width: 425px) {
        width: 100%;
    }
`

export const Lista = styled.li `
  list-style: none;
  font-size: 2vw;
  @media (max-width: 425px) {
   font-size: 4vw; 
  }
`

export const Remove = styled.button`
    height: 3vh;
    width: 2vw;
    background-color: red;
    border-radius: 10px;
    cursor: pointer;
    color: white;

    @media (max-width: 425px) {
        height: 3vh;
        width: 5vw;
    }
`
export const Check = styled.input`
    height: 3vh;
    width: 2vw;
    position: relative;
    right: 50px;
    @media (max-width: 425px) {
        height: 3vh;
        width: 5vw;
        position: relative;
        right: 0px;
    }
`

export const Escrever = styled.input`
    border-radius: 5px;
    width:100%;
    height: 4vh;
    text-align:center;
    font-size: 1.17vw;
    background-color: white;
    @media (max-width: 425px) {
        font-size: 3vw;
        width: 95%;
    }
`

export const Map = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100%;
    width: 100%;
`

export const Form = styled.form`
    width: 80%;
    height:20%;
    @media (max-width: 425px) {
        width: 90%;
    }
`
export const EnglobaInput = styled.div`
    width:80%;
`

export const Adicionar = styled.button`
    font-size: 1vw;
    @media (max-width: 425px) {
        font-size: 2vw;
    }
`

export const Delete = styled.button`
    font-size: 1vw;
    @media (max-width: 425px) {
        font-size: 2vw;
    }
`