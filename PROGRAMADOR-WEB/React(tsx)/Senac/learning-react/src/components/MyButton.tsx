import { ReactNode, useState } from 'react';
import './MyButton.css'

interface Props{
    onClick?: () => void;
    type?: string;
    value?: string;
    id?: string;
  
    className?: string;
    enter?: string;
    leave?: string;
  
    width?: string;
    height?: string;
  
    cursor?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    
    color?: string;
    backgroundColor?: string;
    border?: string;
    borderBottom?: string;
    borderRadius?: string;
    boxShadow?: string;
    padding?: string;
    fontSize?: string;
    fontWeight?: string;
    transition?: string;
    outline?: string;
    children?: ReactNode;
  }
  
  const MyButton = ({id, className, enter, leave, onClick, type, value, width, height, cursor, display, justifyContent, alignItems, border, borderBottom, borderRadius, color, padding, fontSize, boxShadow, fontWeight, transition, outline, children }: Props) => {
  
    const [hover, setHover] = useState(false)
        const handleMouseEnter = () => {
            setHover(true)
        }
  
        const handleMouseLeave = () => {
            setHover(false)
        }
        
  
    const estiloInput: React.CSSProperties = {width, height, cursor, display, justifyContent, alignItems, backgroundColor: hover ? enter : leave, border, borderBottom, borderRadius, padding, fontSize, boxShadow, fontWeight, transition, color, outline, }
  
    return(
        <button
        id={id}
        value={value}
        className={className}
        style={estiloInput}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        children={children}
        />
    )
}

export default MyButton;