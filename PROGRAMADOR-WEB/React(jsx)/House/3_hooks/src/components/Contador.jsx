import React from 'react'
import { useReducer } from 'react';

//definir estado inicial = {contador : 0};
const estadoInicial = {contador: 0}

//função Reducer para alterar o estado
function reducer(estado, acao){
switch(acao.tipo){
    case "aumentar":
        return {contador: estado.contador + 1}

    case "diminuir":
        return {contador: estado.contador - 1}

    case "resetar":
        return {contador: 0}

    default:
        throw new Error("Ação não suportada")
    }
}

const Contador = () => {
    const [estado, dispatch] = useReducer(reducer, estadoInicial)

    return (
        <div>
            <p>contagem: {estado.contador}</p>
            <button onClick={()=>dispatch({tipo: "aumentar"})}>
                Aumentar
            </button>


            <button onClick={()=>dispatch({tipo: "resetar"})}>
                Zerar
            </button>


            <button onClick={()=>dispatch({tipo: "diminuir"})}>
                Diminuir
            </button>
        </div>
  )
}

export default Contador