import MyInput from './components/MyInput'
import MyButton from './components/MyButton'
import { useState } from 'react'
import './App.css'

function App() {

  const[items, setItems] = useState(["List of items"]);

  const handleOnClick = () => {
    setItems([...items, items.length + " item"]);
  }

  return (
    <>
      <div className='page'>
        <MyInput type='text' ph='Username' />
        
        <MyInput type='password' ph = 'Password' />
        
        <MyButton onClick={handleOnClick}>Clique</MyButton>
      </div>

      <div className='items-container'>
        {items.map((item, index) => (
          <h1 key={index}> {item} </h1>
        ))}
      </div>
    </>
  );
}

export default App;