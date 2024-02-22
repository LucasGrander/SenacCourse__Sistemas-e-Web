var counter;

counter = 0;

document.getElementById("numAREA").textContent = `${counter}`;


document.getElementById("btn1").onclick = function(){
    counter = counter - 1;
    document.getElementById("numAREA").textContent = `${counter}`;
};


document.getElementById("btn2").onclick = function(){
    counter = counter * 0;
    document.getElementById("numAREA").textContent = `${counter}`
}

document.getElementById("btn3").onclick = function(){
    counter = counter + 1;
    document.getElementById("numAREA").textContent = `${counter}`;
};