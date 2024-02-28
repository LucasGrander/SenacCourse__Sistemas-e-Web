const resultArea = document.getElementById("result-area");

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
    const button = document.getElementById("mult")
    resultArea.value += button.textContent.trim();
}

document.getElementById("division").onclick = function(){
    const button = document.getElementById("division")
    resultArea.value += button.textContent.trim();
}
//  BOTÕES DIVERSOS ------------------------------------------------------
document.getElementById("ac").onclick = function(){
    const clear = ""
    resultArea.value = clear;
}

