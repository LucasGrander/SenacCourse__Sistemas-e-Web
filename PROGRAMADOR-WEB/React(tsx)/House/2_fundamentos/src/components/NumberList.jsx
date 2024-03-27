const NumberList = ({numbers}) => {
    //metods de Array ---> filter, map, reduce, ...

    //usar a 'key' --> identificador para cada elemento

    return (
        <div>
            {numbers.map((number, index) => (
                <ul>
                    <li key={index}>
                        {number}
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default NumberList