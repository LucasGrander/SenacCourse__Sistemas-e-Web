const numFix = document.getElementById("input-num-fixo");
const numVar = document.getElementById("input-num-var");
document.getElementById("btn-action").onclick = function(){
    document.getElementById("calcs").textContent = ""
    document.getElementById("titleTAB").textContent = `Tabuada do ${numFix.value}`;

    for(i = 1 ; i <= numVar.value ; i++){
        const result = numFix.value * i;
        const calcs = document.getElementById("calcs")
        const showResult = document.createElement("span");
        showResult.innerHTML = `<span>${numFix.value} x ${i} = ${result}</span>`;
        setTimeout(() =>{
            calcs.appendChild(showResult);
        }, i * 50)
    }
}