import { useState } from "react"
import MyButton from "../components/MyButton"
import MyInput from "../components/MyInput"
import './Login.css'
import { useNavigate } from "react-router-dom"


const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [loginFail, setLoginFail] = useState(false)
    
    const navigate = useNavigate();

    // const handleUserOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setUser(e.target.value)
    // }

    // const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.target.value)
    // }

    const recep = document.getElementById("recep");

    const handleOnClick = () =>{
        if(user === "Lucas" && password === "1234") { 
            recep.textContent = `Seja Bem-Vindo, ${user}`

            setTimeout(() =>{
                navigate("/to-do-list");
            }, 2000)
        }

        else{
            setLoginFail(true);
            setUser("");
            setPassword("");
            alert("Usuário ou senha incorreto");
            setLoginFail(false);
        }
    }

    return(
        <div className="container">
            <div className="content">
                <h2>Login</h2>

            <MyInput fontColor="white" onChange={(e) => setUser(e.target.value)} value={loginFail ? "" : user} type="text" ph="Nome de usuário" />

            <MyInput fontColor="white" onChange={(e) => setPassword(e.target.value)} value={loginFail ? "" : password} type="password" ph="Senha" />

            <MyButton
            width="50%"
            height="30px"
            children="Entrar"
            onClick={handleOnClick} />

            <p id="recep">{}</p>
            </div>
        </div>
    )
}

export default Login