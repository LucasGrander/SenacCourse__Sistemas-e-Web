const newTextField = document.getElementById("new-text");
const h1ALL = document.querySelectorAll("h1");

function getH1(){
    h1ALL.forEach((h1) =>{
        h1.textContent = newTextField.value;
    })
}