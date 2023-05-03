
import styled, {keyframes} from "styled-components";

const titleAnimation = keyframes`
    0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#140433;
    width: 100%;
    height: 100vh;


`

export const ContainerItens = styled.div`

width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



`
export const Image = styled.img`
    width: min(40vmin, 100%);
    

`
export const H1 = styled.h1`

font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #FFFFFF;
    margin-top: 10px;
    margin-bottom: 50px;

    animation: ${titleAnimation} 4s ease-in-out infinite;
    

`

export const ContainerInputs = styled.div`

    display: flex;
    flex-direction: column;
    
    gap: 30px;
    width: min(100%, 300px);
    

`
export const InputBox = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;
 

`
export const Label = styled.label`

font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
display: flex;
align-items: center;
color: #EEEEEE;

`

export const Input = styled.input`

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
height: 50px;
border: none;
color: #fff;
padding-left: 20px;






`

export const Button = styled.button`


    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    background: #D93856;
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
    text-decoration: none;

    &:hover{
        opacity: 0.8;
    
    }

    &:active{
        opacity: 1;
    }

`
export const MediaWrapper = styled.div`

  @media screen and (max-width: 350px) {
    ${H1}{
        font-size: min(70%, 40px);
        display: none;
         
  }

  ${Button}{
        height: 50px;
         
  }

  ${Label}{
    font-size: 5vmin;
  }

  

}
`






