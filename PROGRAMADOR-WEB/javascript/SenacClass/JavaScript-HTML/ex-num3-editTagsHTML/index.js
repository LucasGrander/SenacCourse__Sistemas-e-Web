const selectorField = document.getElementById("selector");
const colorField = document.getElementById("color");
const borderField = document.getElementById("border");

document.getElementById("btn-change").onclick = function(){
    const elements = document.querySelectorAll(selectorField.value);
    const dropDown = document.getElementById("drop-down");
    
    if(elements.length > 0 ){
        elements.forEach((element) =>{
            if(dropDown.selectedIndex === 0){
                element.style.color = colorField.value;
            }
            else if(dropDown.selectedIndex === 1){
                element.style.backgroundColor = colorField.value;
            }
            else{
                element.style.border = borderField.value
            }
        })
    }
    else{
        alert(`a tag ${selectorField.value} não existe nesse documento`)
    }
}
