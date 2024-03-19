import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ExUseEffect = () => {
    //executa algo baseado em algo --->>
    //mudança de valor;
    //carregamento da página;
    const [contador, setContador] = useState(0)

    useEffect(() =>{
        document.title = `você clicou ${contador} vezes`
    })
  return (
    <div>
        <button onClick={() => setContador(contador + 1)} >Clique</button>
    </div>
  )
}

export default ExUseEffect