import FilhoFunction from "./FilhoFunction"

const PaiFunction = () => {
    
    const handleChildClick = () =>{
        console.log("clicou com o botn no element filho")
    }

    return(
        <div>
            <FilhoFunction onChildClick={handleChildClick} />
        </div>
    )
}

export default PaiFunction