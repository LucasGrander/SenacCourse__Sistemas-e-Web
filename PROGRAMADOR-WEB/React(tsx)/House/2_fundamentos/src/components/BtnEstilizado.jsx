const BtnEstilizado = () => {

    const estiloDoBtn = {
        backgroundColor: "#ccc",
        color: "black",
        cursor: "pointer",
        padding: "20px 40px"
    }

    return(
        <div>
            <button style={estiloDoBtn}>Clique</button>
        </div>
    )
}

export default BtnEstilizado