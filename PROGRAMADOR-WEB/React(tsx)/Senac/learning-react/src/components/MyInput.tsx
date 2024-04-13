import { useState } from 'react';
import './MyInput.css'

interface Props{
  onFocus?: () => void;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  maxlenght?: number;
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
  ph?: string;
  outline?: string;
}

const MyInput = ({id, className, enter, leave, onClick, onChange, onFocus, onBlur, type, value, width, height, cursor, display, justifyContent, alignItems, border, borderBottom, borderRadius, color, padding, fontSize, boxShadow, fontWeight, transition, maxlenght, ph, outline }: Props) => {

  const [hover, setHover] = useState(false)
      const handleMouseEnter = () => {
          setHover(true)
      }

      const handleMouseLeave = () => {
          setHover(false)
      }
      

  const estiloInput: React.CSSProperties = {width, height, cursor, display, justifyContent, alignItems, backgroundColor: hover ? enter : leave, border, borderBottom, borderRadius, padding, fontSize, boxShadow, fontWeight, transition, color, outline }

  return(
      <input
      placeholder={ph}
      maxLength={maxlenght}
      onFocus={onFocus}
      onBlur={onBlur}
      id={id}
      value={value}
      className={className}
      style={estiloInput}
      type={type}
      onChange={onChange}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      />
  )
  }
  
  export default MyInput