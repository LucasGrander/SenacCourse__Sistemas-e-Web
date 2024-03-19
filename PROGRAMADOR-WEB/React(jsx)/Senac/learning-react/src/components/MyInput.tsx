import './MyInput.css'

interface Props{
  type: string;
  ph: string;
}


function MyInput({type, ph}: Props) {
    return (
      <input type={type} placeholder={ph} />
    )
  }
  
  export default MyInput;