import React from "react"

const ExercThree = ({tasks}) => {
    return(
        <ul>
            {tasks.map((task)=>(
                <li key={task.id}>
                    {task.text}
                </li>
            ))}
        </ul>
)

}


export default ExercThree