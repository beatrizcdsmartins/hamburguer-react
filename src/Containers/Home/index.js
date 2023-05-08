import React, {useState, useRef} from "react";
import axios from "axios";

import { useHistory} from "react-router-dom";
import MainImage from '../../assets/2400_4-07.png'
import { ContainerItens, InputBox, Label, H1, Container, Input, Button, Image, ContainerInputs, MediaWrapper } from './styles.js'

const App = () => {

  const [users, setUsers] = useState([]) //Aqui é o valor inicial, nesse caso espera-se um array vazio, pois o map espera um array
  const inputOrder = useRef()
  const inputName = useRef()
  const history = useHistory()



  async function newOrder(){



    if (inputOrder.current.value !==""){
      
      const {data: newUser} = await axios.post("https://backend-react.vercel.app/Orders", {order:inputOrder.current.value, name:inputName.current.value})
      setUsers([...users, newUser ])
    } 
 
    history.push("/Orders")
  }

  return (

    <MediaWrapper>
          <Container>
      <ContainerItens>
      <Image alt="hamburguer-logo" src={MainImage} />
      <H1>Faça o seu pedido!</H1>
      <ContainerInputs>
        <InputBox>
          <Label>Pedido</Label>
          <Input ref={inputOrder} placeholder="1 coca-cola, 1 X-salada "></Input>
        </InputBox>

        <InputBox>
          <Label>Nome do Cliente</Label>
          <Input ref={inputName} placeholder="Beatriz Martins"></Input>
        </InputBox>
      
      </ContainerInputs>
      <Button onClick={newOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>

    </MediaWrapper>


  )

}

export default App