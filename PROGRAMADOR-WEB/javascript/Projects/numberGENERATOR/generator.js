let random;
let random2;
let random3;

let min = 1;
let max = 1000;

document.getElementById("btnGEN").onclick = function(){
    random = Math.floor(Math.random() * (max - min));
    random2 = Math.floor(Math.random() * (max - min));
    random3 = Math.floor(Math.random() * (max - min));

    document.getElementById("areaGEN").textContent = `${random}`;
    document.getElementById("areaGEN2").textContent = `${random2}`;
    document.getElementById("areaGEN3").textContent = `${random3}`;
};

document.getElementById("btnRESET").onclick = function(){
    random = "---"
    random2 = "---"
    random3 = "---"

    document.getElementById("areaGEN").textContent = `${random}`;
    document.getElementById("areaGEN2").textContent = `${random2}`;
    document.getElementById("areaGEN3").textContent = `${random3}`;
}