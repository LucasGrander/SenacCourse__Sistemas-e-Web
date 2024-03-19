import './App.css'
import Welcome from './components/Welcome'
import Text from './components/Text'
import BomDia from './components/BomDia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'
import Button from './components/Button'
import PaiFunction from './components/PaiFunction'
import Form from './components/Form'
import Render from './components/Render'
import ExpTern from './components/ExpTern'
import RenderNulo from './components/RenderNulo'
import NumberList from './components/NumberList'
import BtnEstilizado from './components/BtnEstilizado'
import BtnBlue from './components/BtnBlue'
import ExercOne from './tasks/ExercOne'
import ExercTwo from './tasks/ExercTwo'
import ExercThree from './tasks/ExercThree'

function App() {

  const tarefasList = [
    { id: 1, text: "Estudar React" },
    { id: 2, text: "Comer e lavar a louça" },
    { id: 3, text: "Correr na rua" },
]

  return (
    <>
      {/* criação de componente */}
      <Welcome />
      <Text />
      {/* esxpressões JSX ---> sem TSX */}
      <BomDia />
      {/* Componente dentro de outro componente */}
      <Pai />
      {/* Propriedades */}
      <Descricao nome = "Grander" idade = {18}/>
      {/* forma desestruturada */}
      <Cachorro nome = "Json" raca = "Dalmata" />
      {/* useState - tipo de Hook */}
      <Counter  />
      {/* Múltiplos estados */}
      <UserInfoForm />
      {/* Eventos - React */}
    <Button />
    {/* Passar funções de manipulação de eventos com Props */}
    <PaiFunction />
    {/* Eventos de form */}
    <Form />
    {/* Renderização Condicional */}
    <Render user  = "lucas"/>
    {/* Expressão Ternária */}
    <ExpTern loggedIn = {true} />
    <ExpTern loggedIn = {false} />
    {/* Renderização nulo */}
    <RenderNulo warning={"a"} />
    {/* Listas e Chaves */}
    <NumberList numbers = {[1, 2, 3, 4, 5]} />
    {/* Estilo por atributo */}
    <BtnEstilizado />
    {/* Estilos globais */}
    <BtnBlue />

    {/* ATIVIDADES */}
    <ExercOne />
    <ExercTwo />
    <ExercThree tasks = {tarefasList}/>
    </>
  )
}

export default App
