import { useState } from "react";

const UserInfoForm = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(name, email);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Type your Username" />

            <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Type your e-mail" />

            <button type="submit">Enviar</button>
        </form>
    )
}

export default UserInfoForm;