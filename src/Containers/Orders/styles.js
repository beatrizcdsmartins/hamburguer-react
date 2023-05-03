
import styled from "styled-components";
import {keyframes} from 'styled-components';


const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;



export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#140433;
    width: 100%;
    min-height: 100vh;
    height:100%;


`

export const ContainerItens = styled.div`

width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    width: 100%;
}




`
export const Image = styled.img`
    width: min(300px, 70%);
    animation: ${moveUpDown} 2s ease-in-out infinite;
    

 
   

`
export const H1 = styled.h1`

font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #FFFFFF;
    margin-top: 10px;
    margin-bottom: 50px;

`




export const Button = styled.button`


    display:flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-top: 30px;
    background: #ff5050;
    width: 200px;
    height: 70px;
    border: none;
    color:#fff ;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover{
        opacity: 0.8;
    
    }

    &:active{
        opacity: 1;
    }

`

export const User = styled.li`

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
color: #fff;
padding: 20px;
display: flex;
justify-content: space-around;
gap: 10px;
width: min(100%, 400px);

    


    button{
        background: none;
        border: none;
        cursor: pointer;
    }

    .name{
        font-weight: 700;
        letter-spacing:0.5px;
        max-width: 90%;
        text-transform: capitalize;
        word-wrap: break-word;
    }

    .order{
        font-style:italic;
        line-height: -5px;
        max-width: 80%;
        word-wrap: break-word;
        
     
    }

    div{
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items:flex-start;
        gap: 20px;
        width: 70%;
        
    }


`




