import React from 'react'
import './LoginMSG.css'

const LoginMSG = () => {
  return (
    <div className="loginMSG-container">
        <div className="msg">
            <span>Ainda não tem uma conta?</span>
        </div>
        <div className="btn">
            <button>Cadastrar</button>
        </div>
    </div>
  )
}

export default LoginMSG