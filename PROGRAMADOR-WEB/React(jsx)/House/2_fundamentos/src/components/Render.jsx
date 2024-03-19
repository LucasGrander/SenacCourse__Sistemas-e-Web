const Render = ({user}) => {

    //caso houver usuário, retorne o valor abaixo
    return(
        <div>
            {user && <h1>Bem-vindo de volta, {user}</h1>}
        </div>
    )
}

export default Render