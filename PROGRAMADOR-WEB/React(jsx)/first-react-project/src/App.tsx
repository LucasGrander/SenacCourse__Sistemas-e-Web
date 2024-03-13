//para que o componente que eu criei possa aparecer em minha página, agora tenho que fazer uma importação do mesmo, sempre usando IMPORT e FROM 
import MyInput from './components/MyInput';



//aqui criamos um componenete App para armazenar todos os componetes da minha página - sempre usar return(código...)
function App() {
  return (
    //aqui colocamos um <> e fechamos o code com </>, dentro disso será implementado os componentes criados... com o nome do componete dado na hora de sua criação, como aqui: MyInput ----> fazendo isso, agora podermos editar esses botões conforme os props que criamos, colocando o nome do prop e um valor existente para ele
    <>
      <MyInput
      type="text"
      placeholder='Username'/>

      <MyInput
      type="password"
      placeholder='Password'/>
    </>
  );
}
// exportação padrão para qualquer componete criado
export default App
