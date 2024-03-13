import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


//aqui iremos renderizar todos os componentes criados, que por sua vez foi importado acima, e mencionado da seguinte forma: <App />
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
