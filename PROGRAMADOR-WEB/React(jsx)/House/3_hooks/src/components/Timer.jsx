import {useState, useEffect} from 'react'

const Timer = () => {
//setInterval //setTimeout
    const [segundos, setSegundos] = useState(0)
    useEffect(()=>{
        const intervalId = setInterval(() =>{
            setSegundos((prevSegundos) => prevSegundos + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, []) //Arr de dependencias vazio
  return (
    <div>
        timer: {segundos} segundos.
    </div>
  )
}

export default Timer