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

    const handleOnClick = () =>{
        if(user === "Lucas" && password === "1234") { 

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

    const [text, setText] = useState(true)
    
    const handleOnClickLogin = () => {
        setText(true)
    }
    const handleOnClickCadaster = () => {
        setText(false)
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
                    border=".1vh solid white"
                    borderBottom=".5vh solid black"
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
                    border=".1vh solid white"
                    borderBottom=".5vh solid black"
                    fontSize= "18px"
                    fontWeight="700"
                    padding= "10px"
                    children="Cadastrar"
                    cursor="pointer"
                    enter="rgba(255, 0, 0, 0.2)"
                    leave="rgba(255, 0, 0, 0.3)"
                    transition=".3s"
                />



{/* ------------------------ OVERLAY CONTAINER ------------------------- */}
                    <div style={{transform: text ? "translateX(0vh)" : "translate(-85vh)", transition: ".6s"}} className="overlay-form">

                    <div style={{display: text ? "none" : "flex"}} className="cadasterMSG-container">
            <div className="msg">
                <span>Já tem uma conta?</span>
            </div>
            <div className="btn">
                <MyButton
                    onClick={handleOnClickLogin}
                    width="40vh"
                    height="6.5vh"
                    color="white"
                    borderRadius= "10px"
                    border=".1vh solid white"
                    borderBottom=".1vh solid white"
                    fontSize= "18px"
                    fontWeight="700"
                    padding= "10px"
                    children="Login"
                    cursor="pointer"
                    enter="rgba(255, 255, 255, .3)"
                    leave="transparent"
                    transition="0.1s"
                />
            </div>
        </div>
                        
        <div style={{display: text ? "flex" : "none"}} className="loginMSG-container">
            <div className="msg">
                <span>Ainda não tem uma conta?</span>
            </div>
            <div className="btn">
                <MyButton
                    onClick={handleOnClickCadaster}
                    width="40vh"
                    height="6.5vh"
                    color="white"
                    borderRadius= "10px"
                    border=".1vh solid white"
                    borderBottom=".1vh solid white"
                    fontSize= "18px"
                    fontWeight="700"
                    padding= "10px"
                    children="Cadastrar"
                    cursor="pointer"
                    enter="rgba(255, 255, 255, 0.3)"
                    leave="transparent"
                    transition=".1s"
                />
            </div>
        </div>
                    </div>
                </div>

                </div>
        </div>
    )
}

export default Login