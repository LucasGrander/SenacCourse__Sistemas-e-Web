const resultArea = document.getElementById("result-area");
const buttonsSci = document.getElementById("buttons-sci");
const calculator = document.getElementById("calc");

// NÚMEROS PARA CÁLCULOS ------------------------------------------------------
document.getElementById("one").onclick = function(){
    const button = document.getElementById("one");
    resultArea.value += button.textContent.trim();
}

document.getElementById("two").onclick = function(){
    const button = document.getElementById("two");
    resultArea.value += button.textContent.trim();
}

document.getElementById("three").onclick = function(){
    const button = document.getElementById("three");
    resultArea.value += button.textContent.trim();
}

document.getElementById("four").onclick = function(){
    const button = document.getElementById("four");
    resultArea.value += button.textContent.trim();
}

document.getElementById("five").onclick = function(){
    const button = document.getElementById("five");
    resultArea.value += button.textContent.trim();
}

document.getElementById("six").onclick = function(){
    const button = document.getElementById("six");
    resultArea.value += button.textContent.trim();
}

document.getElementById("seven").onclick = function(){
    const button = document.getElementById("seven");
    resultArea.value += button.textContent.trim();
}

document.getElementById("eight").onclick = function(){
    const button = document.getElementById("eight");
    resultArea.value += button.textContent.trim();
}

document.getElementById("nine").onclick = function(){
    const button = document.getElementById("nine");
    resultArea.value += button.textContent.trim();
}

document.getElementById("zero").onclick = function(){
    const button = document.getElementById("zero");
    resultArea.value += button.textContent.trim();
}

// OPERADORES PARA CÁLCULOS ------------------------------------------------------
document.getElementById("sum").onclick = function(){
    const button = document.getElementById("sum");
    resultArea.value += button.textContent.trim();
}

document.getElementById("minus").onclick = function(){
    const button = document.getElementById("minus");
    resultArea.value += button.textContent.trim();
}

document.getElementById("mult").onclick = function(){
    const button = document.getElementById("mult");
    resultArea.value += button.textContent.trim();
}

document.getElementById("division").onclick = function(){
    const button = document.getElementById("division");
    resultArea.value += button.textContent.trim();
}
//  BOTÕES DIVERSOS ------------------------------------------------------
document.getElementById("parenthesis-open").onclick = function(){
    const button = document.getElementById("parenthesis-open");
    resultArea.value += button.textContent.trim();
}

document.getElementById("parenthesis-close").onclick = function(){
    const button = document.getElementById("parenthesis-close");
    resultArea.value += button.textContent.trim();
}

document.getElementById("comma").onclick = function(){
    resultArea.value += ".";
}


document.getElementById("percent").onclick = function(){
    const resultAreaValue = parseFloat(resultArea.value);
    const result = resultAreaValue / 100;
    resultArea.value = result;
}

document.getElementById("result").onclick = function(){
    const result = eval(resultArea.value);
    resultArea.value = result;
}

document.getElementById("ac").onclick = function(){
    resultArea.value = "";
}

document.getElementById("sci").onclick = function(){
    if(buttonsSci.style.opacity == "0" || buttonsSci.style.opacity == ""){
        buttonsSci.style.opacity = "1"
        calculator.style.width = "1000px"
    }
    else{
        buttonsSci.style.opacity = "0"
        calculator.style.width = "680px"
    }
}

document.getElementById("delete").onclick = function(){
    resultArea.value = resultArea.value.slice(0, -1);
}