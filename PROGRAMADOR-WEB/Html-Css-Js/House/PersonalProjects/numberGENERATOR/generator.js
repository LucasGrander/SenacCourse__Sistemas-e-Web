let random;
let random2;
let random3;
let random4;
let random5;
let random6;

let min = 50;
let max = 150;

document.getElementById("btnGEN").onclick = function(){
    random = Math.floor(Math.random() * (max - min));
    random2 = Math.floor(Math.random() * (max - min));
    random3 = Math.floor(Math.random() * (max - min));
    random4 = Math.floor(Math.random() * (max - min));
    random5 = Math.floor(Math.random() * (max - min));
    random6 = Math.floor(Math.random() * (max - min));

    document.getElementById("areaGEN").textContent = `${random}`;
    document.getElementById("areaGEN2").textContent = `${random2}`;
    document.getElementById("areaGEN3").textContent = `${random3}`;
    document.getElementById("areaGEN4").textContent = `${random4}`;
    document.getElementById("areaGEN5").textContent = `${random5}`;
    document.getElementById("areaGEN6").textContent = `${random6}`;
};

document.getElementById("btnRESET").onclick = function(){
    random = "---"
    random2 = "---"
    random3 = "---"
    random4 = "---"
    random5 = "---"
    random6 = "---"

    document.getElementById("areaGEN").textContent = `${random}`;
    document.getElementById("areaGEN2").textContent = `${random2}`;
    document.getElementById("areaGEN3").textContent = `${random3}`;
    document.getElementById("areaGEN4").textContent = `${random4}`;
    document.getElementById("areaGEN5").textContent = `${random5}`;
    document.getElementById("areaGEN6").textContent = `${random6}`;
}