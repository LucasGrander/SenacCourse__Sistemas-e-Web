const numFix = document.getElementById("input-num-fixo");
const numVar = document.getElementById("input-num-var");
const calcs = document.getElementById("calcs");
document.getElementById("btn-action").onclick = function(){
    const numPicked = document.getElementById("tab-num-pick");
    calcs.innerHTML = "";
    numPicked.textContent = "";
    for(i = 1 ; i <= numVar.value ; i++){
        const result = numFix.value * i;
        numPicked.textContent = `TABUADA DO ${numFix.value}`;
        const showResult = document.createElement("span");
        showResult.innerHTML = `<span class = "effectForSpan">${numFix.value} x ${i} = ${result}</span>`;
        setTimeout(() => {
            calcs.appendChild(showResult);
        }, i * 50);
    }
}