import { useState } from "react"
import MyButton from "../components/MyButton"
import MyInput from "../components/MyInput"
import './Login.css'
import { useNavigate } from "react-router-dom"
import LoginMSG from "../components/LoginMSG"


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

    const [focusInputOne, setFocusInputOne] = useState(false)

    const handleInputFocusOne = () => {
        setFocusInputOne(true)
    }
    const handleInputNotFocusOne = () => {
        setFocusInputOne(false)
    }

    const [focusInputTwo, setFocusInputTwo] = useState(false)

    const handleInputFocusTwo = () => {
        setFocusInputTwo(true)
    }
    const handleInputNotFocusTwo = () => {
        setFocusInputTwo(false)
    }

    return(
        <div className="container">
            <div className="content">

                <div className="left">
                    <h2>Login</h2>

                <MyInput
                    onFocus={handleInputFocusOne}
                    onBlur={handleInputNotFocusOne}
                    border={focusInputOne ? ".25vh solid black" : ".25vh solid rgba(0, 0, 0, 0.3)"}
                    width="60vh"
                    height="7vh"
                    color="black"
                    borderRadius= "10px"
                    fontSize= "2.7vh"
                    padding= "4vh 3vh"
                    onChange={(e) => setUser(e.target.value)}
                    value={loginFail ? "" : user}
                    type="text"
                    ph="Nome de usuário"
                />

                <MyInput
                    onFocus={handleInputFocusTwo}
                    onBlur={handleInputNotFocusTwo}
                    border={focusInputTwo ? ".25vh solid black" : ".25vh solid rgba(0, 0, 0, 0.3)"}
                    width="60vh"
                    height="7vh"
                    color="black"
                    borderRadius= "10px"
                    fontSize= "2.7vh"
                    padding= "4vh 3vh"
                    onChange={(e) => setPassword(e.target.value)}
                    value={loginFail ? "" : password}
                    type="password"
                    ph="Senha"
                />

                <MyButton
                    onClick={handleOnClick}
                    width="40vh"
                    height="6.5vh"
                    color="black"
                    borderRadius= "10px"
                    fontSize= "18px"
                    fontWeight="700"
                    padding= "10px"
                    children="Entrar"
                    cursor="pointer"
                    enter="rgba(255, 0, 0, 0.2)"
                    leave="rgba(255, 0, 0, 0.3)"
                    transition=".3s"
                />

                    <p id="recep">{}</p>
                </div>

                <div className="right">
                    <h2>Cadastro</h2>

                <MyInput
                    onFocus={handleInputFocusOne}
                    onBlur={handleInputNotFocusOne}
                    border={focusInputOne ? ".25vh solid black" : ".25vh solid rgba(0, 0, 0, 0.3)"}
                    width="60vh"
                    height="7vh"
                    color="black"
                    borderRadius= "10px"
                    fontSize= "2.7vh"
                    padding= "4vh 3vh"
                    onChange={(e) => setUser(e.target.value)}
                    value={loginFail ? "" : user}
                    type="text"
                    ph="Email"
                />

                <MyInput
                    onFocus={handleInputFocusOne}
                    onBlur={handleInputNotFocusOne}
                    border={focusInputOne ? ".25vh solid black" : ".25vh solid rgba(0, 0, 0, 0.3)"}
                    width="60vh"
                    height="7vh"
                    color="black"
                    borderRadius= "10px"
                    fontSize= "2.7vh"
                    padding= "4vh 3vh"
                    onChange={(e) => setUser(e.target.value)}
                    value={loginFail ? "" : user}
                    type="text"
                    ph="Nome de usuário"
                />

                <MyInput
                    onFocus={handleInputFocusOne}
                    onBlur={handleInputNotFocusOne}
                    border={focusInputOne ? ".25vh solid black" : ".25vh solid rgba(0, 0, 0, 0.3)"}
                    width="60vh"
                    height="7vh"
                    color="black"
                    borderRadius= "10px"
                    fontSize= "2.7vh"
                    padding= "4vh 3vh"
                    onChange={(e) => setUser(e.target.value)}
                    value={loginFail ? "" : user}
                    type="text"
                    ph="Senha"
                />

                <MyButton
                    onClick={handleOnClick}
                    width="40vh"
                    height="6.5vh"
                    color="black"
                    borderRadius= "10px"
                    fontSize= "18px"
                    fontWeight="700"
                    padding= "10px"
                    children="Cadastrar"
                    cursor="pointer"
                    enter="rgba(255, 0, 0, 0.2)"
                    leave="rgba(255, 0, 0, 0.3)"
                    transition=".3s"
                />

                    <p id="recep">{}</p>

                    <div className="overlay-form">
                        <LoginMSG />
                    </div>
                </div>

                </div>
        </div>
    )
}

export default Login