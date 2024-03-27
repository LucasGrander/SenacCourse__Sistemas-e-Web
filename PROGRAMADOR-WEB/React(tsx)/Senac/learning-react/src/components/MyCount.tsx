import { ReactNode } from "react"

interface Props{
    children: ReactNode;
}

const MyCount = ({children}: Props) => {

    return(
        <div>
            <h2>Quantidade de tarefas: {children}</h2>
        </div>
    )
}

export default MyCount