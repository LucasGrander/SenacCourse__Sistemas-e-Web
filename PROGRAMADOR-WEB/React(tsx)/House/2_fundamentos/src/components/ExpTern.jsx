const ExpTern = ({loggedIn}) => {
    //exibir botão de sair para quem está logado e exibir botão de entrar para quem não está logado

    //entrar - deslogado
    //sair - logado

    return(
        <div>
            {loggedIn ? <button>Sair</button> : <button>Entrar</button>}
        </div>
    )

}

export default ExpTern