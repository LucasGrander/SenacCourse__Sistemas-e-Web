const Button = () => {
    const handleClick = () => {
        console.log("clicou")
    }

    return(
        <button onClick={() => handleClick()}>
            Clique em mim!
        </button>
    )
}

export default Button;