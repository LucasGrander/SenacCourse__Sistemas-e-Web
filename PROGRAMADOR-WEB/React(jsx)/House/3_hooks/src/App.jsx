import './App.css'
import ExUseEffect from './components/ExUseEffect'
import Timer from './components/Timer'
import CoponenteFilho from './components/CoponenteFilho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'

function App() {
  //Aprendendo Hooks
  return (
    <>
     {/* useEffect */} 
     <ExUseEffect />
     {/* Intervalos */}
     <Timer />
     {/* useContext -> transferência de estado entre componentes */}
     <MeuContextoProvider>
     <CoponenteFilho />
     <ValorDoContexto />
     </MeuContextoProvider>
     {/* useReducer */}
     <Contador />

    </>
  )
}

export default App
