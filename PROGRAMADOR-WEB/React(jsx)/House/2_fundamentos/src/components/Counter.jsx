import { useState } from "react"

const Counter = () =>{
    //[consultar, alterar] - podemos setar um valor de início dentro do useState(**aqui**)
    const [count, setCount] = useState (0);
    //Variáveis não podem ser re-renderizadas no useState 'ex.: let x = 10;'
    return(
        <div>
            <p>você clickou {count} vezes</p>
            <button onClick={() => setCount (count+1)}>Aumentar</button>
        </div>
    )
}

export default Counter;