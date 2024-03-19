const RenderNulo = ({warning}) => {
    if(!warning){
        return(
            null
        )
    }

    return(
        <div>
            Aviso!
        </div>
    )
}

export default RenderNulo