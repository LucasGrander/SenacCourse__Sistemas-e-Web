import { ReactNode } from 'react';
import './MyButton.css'

interface Props{
    children?: ReactNode;
    onClick?: () => void;
    width?: string;
}

function MyButton({children, onClick, width}: Props){
    return(
        <button style={{width:`${width}`}} onClick={onClick}>{children}</button>
    );
}

export default MyButton;