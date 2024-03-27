import { useState } from "react";

const Form = () => {

    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        //manipulação de dados;
        //validação de dados;
        //envio ao servidor pela API;
        //loading;
        //chamada da função da mensagem de erro ou de bem sucedido

        event.preventDefault()

        console.log("Formulário Enviado. --> " + value)
    }

    return(
        <form onSubmit = {handleSubmit} >
            <input onChange={(e) => setValue(e.target.value)} placeholder="Preencha o campo" value={value} type="text" />

            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form;