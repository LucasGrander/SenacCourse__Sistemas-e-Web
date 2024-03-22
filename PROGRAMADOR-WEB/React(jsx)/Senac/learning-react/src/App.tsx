import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import ToDoList from './pages/ToDoList';


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path= "/" element = {<Login />}/>
            <Route path= "/to-do-list" element = {<ToDoList />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;