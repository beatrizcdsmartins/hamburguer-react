import React, {useState, useEffect} from "react";
import axios from "axios";
import Trash from '../../assets/trash-icon.svg'
import OrderBurguer from '../../assets/delivery.png'
import {User, ContainerItens, H1, Container, Button, Image} from './styles.js'

import { useHistory } from "react-router-dom";

const Orders = () => {



  const [users, setUsers] = useState([]) //Aqui é o valor inicial, nesse caso espera-se um array vazio, pois o map espera um array

  const history = useHistory()

  function goBackPage(){
    history.push('/')
  }


  useEffect(()=>{

    async function createForWeCanUseAsncy (){
      const {data: demaisPedidos} = await axios.get("http://localhost:3002/users")// recuperando todos os usuários

    setUsers(demaisPedidos)

    }

    createForWeCanUseAsncy()
    
  }, [])

  async function deleteUser(userId){
    const newUsers = users.filter(user => user.id !== userId)
   await axios.delete(`http://localhost:3002/users/${userId}`) // deletando no backend
// Vai deixar no array só os users que tem o id diferente do que foi chamado para ser deletado
    setUsers(newUsers)
    
  }


  return (

    
         <Container>
      <ContainerItens>
      <Image alt="hamburguer-logo" src={OrderBurguer} />
      <H1>Pedidos</H1>
      
      <ul>

        {users.map((user)=>(
          <User key={user.id}>
            <div>
              <p className="order">{user.order}</p> 
              <p className="name">{user.name}</p>
            </div>

            <button onClick={()=>deleteUser(user.id)}> <img src={Trash} alt="delete-users"/></button>
          </User>
        ))}
      </ul>
      <Button onClick={goBackPage}>Voltar</Button>


      </ContainerItens>
    </Container>


 
  )

}

export default Orders