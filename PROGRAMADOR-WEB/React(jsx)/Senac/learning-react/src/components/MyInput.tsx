import { ChangeEvent } from 'react';
import './MyInput.css'

interface Props{
  type?: string;

  value?: string;

  width?: string;
  height?: string;
  
  bgColor?: string;
  fontColor?: string;

  ph?: string;
  phColor?: string;

  onChange?: (e : ChangeEvent<HTMLInputElement>) => void
}


function MyInput(props : Props) {

  // const [isFocused, setIsFocused] = useState(false);

    return (
      <input
      type = {props.type}
      placeholder ={ props.ph}
      value = {props.value}
      onChange={props.onChange}
      
      style={{
        color: `${props.fontColor}`,
        backgroundColor: `${props.bgColor}`,
        width:`${props.width}`, 
        height:`${props.height}`,}}
      />
    )
  }
  
  export default MyInput;