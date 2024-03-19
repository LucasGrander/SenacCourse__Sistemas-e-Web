import { useState } from "react"

const ExercTwo = () => {
    const [num, setNum] = useState(0)

    return(
        <div>
            <button onClick={() => setNum(num + 1)}>Clique Aqui para contar</button>
            <p>O botão foi clicado {num} vezes</p>
        </div>
    )

}

export default ExercTwo