var resultArea = document.getElementById("result-area");

//ON e OFF -- teste
const onOff = document.getElementById("OnOff");
const mode = document.getElementById("circle");
const calcDisplayType = document.getElementById("calc");
const imgOPC = document.getElementById("image-backg");
const textMode = document.getElementById("modeText");


mode.onclick = function(){
    if(calcDisplayType.style.display === "none" || calcDisplayType.style.display === ""){
        onOff.style.backgroundColor = "rgba(0, 78, 0, 0.251)"
        mode.style.backgroundColor = "green"
        mode.style.transform = "translateX(65px)"
        mode.style.transition = "transform .5s ease-in-out";
        calcDisplayType.style.display = "block"
        calcDisplayType.style.opacity = "1"
        imgOPC.style.opacity = ".4"
        imgOPC.style.transition = "opacity 1s"
        textMode.textContent = `Mode: On`

        mode.onmouseenter = function(){
            mode.style.backgroundColor = "rgb(3, 57, 3)"
            mode.style.transition = ".3s"
        }
        
        mode.onmouseleave = function(){
            mode.style.backgroundColor = "green"
            mode.style.transition = ".3s"
        }
    }

    else{
        onOff.style.backgroundColor = "rgba(236, 134, 134, 0.388)"
        mode.style.backgroundColor = "red"
        mode.style.transform = "translateX(0px)"
        mode.style.transition = "transform .5s ease-in-out";
        calcDisplayType.style.display = "none"
        imgOPC.style.opacity = ".2"
        textMode.textContent = `Mode: Off`

        mode.onmouseenter = function(){
            mode.style.backgroundColor = "rgb(86, 9, 9)"
            mode.style.transition = ".3s"
        }
        
        mode.onmouseleave = function(){
            mode.style.backgroundColor = "red"
            mode.style.transition = ".3s"
        }
    }
}


// NÚMEROS PARA CÁLCULOS ------------------------------------------------------
document.getElementById("one").onclick = function(){
    const button = document.getElementById("one");
    resultArea.value += button.textContent.trim();
};

document.getElementById("two").onclick = function(){
    const button = document.getElementById("two");
    resultArea.value += button.textContent.trim();
};

document.getElementById("three").onclick = function(){
    const button = document.getElementById("three");
    resultArea.value += button.textContent.trim();
};

document.getElementById("four").onclick = function(){
    const button = document.getElementById("four");
    resultArea.value += button.textContent.trim();
};

document.getElementById("five").onclick = function(){
    const button = document.getElementById("five");
    resultArea.value += button.textContent.trim();
};

document.getElementById("six").onclick = function(){
    const button = document.getElementById("six");
    resultArea.value += button.textContent.trim();
};

document.getElementById("seven").onclick = function(){
    const button = document.getElementById("seven");
    resultArea.value += button.textContent.trim();
};

document.getElementById("eight").onclick = function(){
    const button = document.getElementById("eight");
    resultArea.value += button.textContent.trim();
};

document.getElementById("nine").onclick = function(){
    const button = document.getElementById("nine");
    resultArea.value += button.textContent.trim();
};

document.getElementById("zero").onclick = function(){
    const button = document.getElementById("zero");
    resultArea.value += button.textContent.trim();
};

// FUNÇÕES PARA MEDIAR O USO DOS SÍMBOLOS ARITIMÉTICOS ---------------------------
function blockSigns(button){
    const lastClick = resultArea.value.slice(-1);

    if (lastClick === "÷" || lastClick === "+" || lastClick === "x" || lastClick === "-" || lastClick === "," || lastClick === "%"){
        resultArea.value = resultArea.value.slice(0, -1);
    }
    resultArea.value += button.textContent.trim();
}

function blockSignsTripple(button){
    const lastClickTripple = resultArea.value.slice(-3)
    if (lastClickTripple === "tan" || lastClickTripple === "cos" || lastClickTripple === "sin" || lastClickTripple === "deg"){
        resultArea.value = resultArea.value.slice(0, -3);
    }
    resultArea.value += button.textContent.trim();
}

function blockSignsDouble(button){
    const lastClickDouble = resultArea.value.slice(-2);
    if (lastClickDouble === "ln" || lastClickDouble === "lg"){
        resultArea.value = resultArea.value.slice(0, -2);
    }
}

// OPERADORES PARA CÁLCULOS ------------------------------------------------------
document.getElementById("sum").onclick = function(){
    if(resultArea.value == ""){
    }
    else{
        blockSigns(this);
    }
};

document.getElementById("minus").onclick = function(){
    if(resultArea.value == ""){
    }
    else{
        blockSigns(this);
    }
};

document.getElementById("mult").onclick = function(){
    if(resultArea.value == ""){
    }
    else{
        blockSigns(this);
    }
};

document.getElementById("division").onclick = function(){
    if(resultArea.value == ""){
    }
    else{
        blockSigns(this);
    }
};

document.getElementById("percent").onclick = function(){
    if(resultArea.value == ""){
    }
    else{
        blockSigns(this);
    }
};

document.getElementById("result").onclick = function(){
    var calc = resultArea.value;
    const firstChar = resultArea.value;
    if(firstChar == "" || firstChar == "tan" || firstChar == "sin" || firstChar == "cos" || firstChar == ")" || firstChar == "(" || firstChar == "deg" || firstChar == "ln" || firstChar == "lg" || firstChar == "," || firstChar == "Error (Press AC)"){
        resultArea.value = `Error (Press AC)`;
    }
    else{
        calc = calc.replaceAll("x", '*').replaceAll("÷", '/').replaceAll(",", '.').replaceAll("%", '/100');
        var changes = eval(calc);
        changesFormated = changes.toString().replaceAll(".", ',')
        resultArea.value = changesFormated;
    }
};

//  BOTÕES DIVERSOS ------------------------------------------------------
document.getElementById("ac").onclick = function(){
    const clear = "";
    resultArea.value = clear;
};


document.getElementById("delete").onclick = function(){
    const displayValue = resultArea.value;
    if(displayValue.slice(-3) == "tan" || displayValue.slice(-3) == "sin" || displayValue.slice(-3) == "cos" || displayValue.slice(-3) == "deg"){
        resultArea.value = displayValue.slice(0, -3);
        } 
        else if(displayValue.slice(-2) == "lg" || displayValue.slice(-2) == "ln"){
        resultArea.value = displayValue.slice(0, -2);
        } 
    else{
        resultArea.value = displayValue.slice(0, -1);
    }
}

document.getElementById("sci").onclick = function(){
    const verifyDisplay = document.getElementById("buttons-sci");
    const focusSciBTN = document.getElementById("sciBTN");

    if(verifyDisplay.style.display == "none" || verifyDisplay.style.display == "" || verifyDisplay.style.opacity == "0" || verifyDisplay.style.opacity == ""){
        verifyDisplay.style.display = "grid";
        focusSciBTN.style.backgroundColor = "rgb(187, 104, 104)"
        focusSciBTN.style.border = "3px solid black";
        calcDisplayType.style.width = "1000px"

        setTimeout(() => {
            verifyDisplay.style.opacity = "1";
            verifyDisplay.style.transition = "opacity 1s ease-in-out";
        }, 300);

        document.getElementById("sci").onmouseenter = function(){
            focusSciBTN.style.backgroundColor = "rgb(187, 104, 104)"
        }
        document.getElementById("sci").onmouseleave = function(){
            focusSciBTN.style.backgroundColor = "rgb(187, 104, 104)"
        }

    }
    else{
        focusSciBTN.style.backgroundColor = "red"
        focusSciBTN.style.border = "hidden"
        verifyDisplay.style.opacity = "0";
        verifyDisplay.style.transition = "opacity .5s ease-in-out";

        setTimeout(() => {
            calcDisplayType.style.width = "680px"
            verifyDisplay.style.transition = "width 1s ease-in-out";
        }, 300);
        
        document.getElementById("sci").onmouseenter = function(){
            focusSciBTN.style.backgroundColor = "rgb(187, 104, 104)" 
        }
        document.getElementById("sci").onmouseleave = function(){
            focusSciBTN.style.backgroundColor = "red"
        }
    }
};

document.getElementById("comma").onclick = function(){
    if(resultArea.value == ""){
    }
    else{
        blockSigns(this);
    }


};


//  BOTÕES CIENTÍFICOS ------------------------------------------------------
document.getElementById("parenthesis-open").onclick = function(){
    const button = document.getElementById("parenthesis-open");
    const lastClickSolo = resultArea.value.slice(-1)
    if(lastClickSolo == "(" || lastClickSolo == ")"){
        resultArea.value = resultArea.value.slice(0, -1)
    }
    resultArea.value += button.textContent.trim();


};

document.getElementById("parenthesis-close").onclick = function(){
    const button = document.getElementById("parenthesis-close");
    const lastClickSolo = resultArea.value.slice(-1)
    if(lastClickSolo == "(" || lastClickSolo == ")"){
        resultArea.value = resultArea.value.slice(0, -1);
    }
    resultArea.value += button.textContent.trim();


};

document.getElementById("tan").onclick = function(){
    blockSignsDouble(this);
    blockSignsTripple(this);
};

document.getElementById("cos").onclick = function(){
    blockSignsDouble(this);
    blockSignsTripple(this);
};

document.getElementById("sin").onclick = function(){
    blockSignsDouble(this);
    blockSignsTripple(this);
};

document.getElementById("deg").onclick = function(){
    blockSignsDouble(this);
    blockSignsTripple(this);
};

document.getElementById("ln").onclick = function(){
    if(resultArea.value == "" || resultArea.value == "tan" || resultArea.value == "cos" || resultArea.value == "sin" || resultArea.value == "deg"){
    }
    else{
        blockSignsDouble(this);
        blockSignsTripple(this);
    }
};

document.getElementById("lg").onclick = function(){
    if(resultArea.value == "" || resultArea.value == "tan" || resultArea.value == "cos" || resultArea.value == "sin" || resultArea.value == "deg"){
    }
    else{
        blockSignsDouble(this)
        blockSignsTripple(this);
    }
};