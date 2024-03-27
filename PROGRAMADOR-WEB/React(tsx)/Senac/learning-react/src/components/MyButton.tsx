import { ReactNode } from 'react';
import './MyButton.css'

interface Props{
    children?: ReactNode;
    onClick?: () => void;
    width?: string;
    height?: string;
}

function MyButton({children, onClick, width, height}: Props){
    return(
        <button
        style={{width:`${width}`, height:`${height}`}}
        onClick={onClick}>{children}
        </button>
    );
}

export default MyButton;