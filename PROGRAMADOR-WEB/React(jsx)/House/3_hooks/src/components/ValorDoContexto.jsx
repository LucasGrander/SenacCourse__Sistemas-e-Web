import { MeuContexto } from '../contexts/MeuContexto'
import { useContext } from 'react'

const ValorDoContexto = () => {
    const {mensagem} = useContext(MeuContexto)

  return (
    <div>
        O valor do contexto é: {mensagem}
    </div>
  )
}

export default ValorDoContexto