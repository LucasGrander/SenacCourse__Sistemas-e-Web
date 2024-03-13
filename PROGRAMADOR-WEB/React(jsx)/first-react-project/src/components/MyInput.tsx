// esse import serve para puxarmos estilizações para o botão
import './MyInput.css';

// aqui nós usamos o interface Props - (pode escolher qualquer nome, nesse caso foi usado o 'Prop'), isso serve para tornar "editável" uma propriedade do elemento ou sua estilização, por exemplo.
interface Props{
    type: string;
    placeholder?: string;
    bgColor?: string;
}

// aqui abrimos uma function, com a finalidade de puxarmos as props através do seu nome, e também, onde essa prop está localizada "nome: (Props)" sempre usar return(código...)
function MyInput({type, placeholder, bgColor}: Props){
    return(
        //ele irá retornar um INPUT com o type, placeholder e cor de fundo editável ou seja, qualquer INPUT criado poderá ser editado futuramente, após eu importa-lo
        <div className='fieldTex'>
            <input
            type={type}
            placeholder={placeholder}
            style={{backgroundColor:`${bgColor}`}} />
        </div>
    );
}

//exportação normal para todo e qualquer componente criado
export default MyInput;