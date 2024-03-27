import { useState } from "react"

const ExercOne = () => {

    const [user, setUser] = useState("")


    return(
        <div>
            <input onChange={(e) => setUser(e.target.value)} placeholder="Qual é o seu nome?" value={user}  type="text" />
            <p>Boas Vindas, {user}</p>
        </div>
    )

}

export default ExercOne