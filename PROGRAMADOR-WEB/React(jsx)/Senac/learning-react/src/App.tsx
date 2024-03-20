import MyInput from './components/MyInput'
import MyButton from './components/MyButton'
import { useState } from 'react'
import './App.css'
import MyCount from './components/MyCount';

function App() {

  const [items, setItems] = useState<string[]>([]);

  const [newItem, setNewItem] = useState("");

  const handleOnClick = () => {
    if(newItem.trim().length > 0){
      setItems([...items, items.length + 1 + " - " + newItem]);
      setNewItem("");
    }
    else{
      alert("Não é possível adicionar um item sem antes colocar uma descrição!");
      setNewItem("");
    }
  }

  return (
    <>
      <div className='page'>

        <MyInput
        type='text'
        ph='Type Your Task'
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem.length > 0 ? newItem : ""}
        />
        
        <MyButton onClick={handleOnClick}>Clique</MyButton>
        <MyCount children = {items.length}  />
      </div>

      <div className='items-container'>
        {items.map((newItem, index) => (
          <h1 key={index}> {newItem} </h1>
        ))}
      </div>
    </>
  );
}

export default App;