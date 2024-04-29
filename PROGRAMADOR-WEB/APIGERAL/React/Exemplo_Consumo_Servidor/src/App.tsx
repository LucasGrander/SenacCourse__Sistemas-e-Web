import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {

  interface User {
    nome: string;
    sobrenome: string;
    id: number;
  }

  const [users, setUsers] = useState<User[]>([])
  const [userName, setUserName] = useState("")
  const [apelid, setApelid] = useState("")
  const [SelectedId, setSelectedId] = useState(-1)

    const handleGetUsers = async () => {
      const res = await axios.get("http://localhost:8080/users")

      setUsers(res.data)
    }

    const handleAddOrUpdateUser = async () => {
        if(SelectedId < 0){
          await axios.post("http://localhost:8080/users",{nome: userName, sobrenome: apelid})

      alert(`${userName} ${apelid} inserido com sucesso`)

      handleGetUsers()

      setUserName("")
      setApelid("")
    }
      else{
        await axios.put("http://localhost:8080/users", {id: SelectedId, nome: userName, sobrenome: apelid})

        alert(`Usuário alterado com sucesso`)

        handleGetUsers()

        setUserName("")
        setApelid("")
        setSelectedId(-1)
      }
    }

    
    const handleDeleteUser = async (id : number) => {
      await axios.delete(`http://localhost:8080/users?id=${id}`)

      alert(`Usuário removido com sucesso`)

      handleGetUsers()
    }

    const handleSelectUser = async (id : number) => {
      const user = users.find((user : User) => user.id === id)

      if(user){
        setUserName(user.nome)
        setApelid(user.sobrenome)
        setSelectedId(user.id)
      }
    }

  return (
  <>
  <input
  onChange={(e) => setUserName(e.target.value)}
  value={userName.length > 0 ? userName : ""}
  placeholder='nome'
  type="text"
  />

<input
  onChange={(e) => setApelid(e.target.value)}
  value={apelid.length > 0 ? apelid : ""}
  placeholder='sobrenome'
  type="text"
  />

  <button onClick={handleAddOrUpdateUser} >Salvar</button>
  <button onClick={handleGetUsers} >Listar</button>

  <table style={{ width: "100px 0px" }}>
      <tbody>
        <tr>
          <th>ID</th>
          <th style={{ width: "500px" }}>Nome</th>
          <th style={{ width: "500px" }}>Sobrenome</th>
          <th>Ações</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nome}</td>
            <td>{user.sobrenome}</td>
            <td>
              <button onClick={() => handleDeleteUser(user.id)}>Deletar</button>
              <button onClick={() => handleSelectUser(user.id)}>Alterar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  </>
  )
}

export default App
