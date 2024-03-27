import {useContext} from 'react'
import { MeuContexto } from '../contexts/MeuContexto'


const CoponenteFilho = () => {

  const  {mensagem, setMensagem} = useContext(MeuContexto)
  return (
    <div>
        <button onClick={() => setMensagem("Nova Mensagem")}></button>
    </div>
  )
}

export default CoponenteFilho