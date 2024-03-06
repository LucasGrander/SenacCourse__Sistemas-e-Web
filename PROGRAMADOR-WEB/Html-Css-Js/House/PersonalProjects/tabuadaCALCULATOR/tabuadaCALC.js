document.getElementById('calculatorBTN').onclick = function() {

    let selectedVALUE = document.getElementById("selectNUM");
    let USERnum = selectedVALUE.options[selectedVALUE.selectedIndex].value;

        var result = USERnum * 1
    document.getElementById("num1").textContent = `${USERnum}`;
    document.getElementById("multRES1").textContent = `${result}`;

        var result = USERnum * 2
    document.getElementById("num2").textContent = `${USERnum}`;
    document.getElementById("multRES2").textContent = `${result}`;

        var result = USERnum * 3
    document.getElementById("num3").textContent = `${USERnum}`;
    document.getElementById("multRES3").textContent = `${result}`;

        var result = USERnum * 4
    document.getElementById("num4").textContent = `${USERnum}`;
    document.getElementById("multRES4").textContent = `${result}`;

        var result = USERnum * 5
    document.getElementById("num5").textContent = `${USERnum}`;
    document.getElementById("multRES5").textContent = `${result}`;

        var result = USERnum * 6
    document.getElementById("num6").textContent = `${USERnum}`;
    document.getElementById("multRES6").textContent = `${result}`;

        var result = USERnum * 7
    document.getElementById("num7").textContent = `${USERnum}`;
    document.getElementById("multRES7").textContent = `${result}`;

        var result = USERnum * 8
    document.getElementById("num8").textContent = `${USERnum}`;
    document.getElementById("multRES8").textContent = `${result}`;

        var result = USERnum * 9
    document.getElementById("num9").textContent = `${USERnum}`;
    document.getElementById("multRES9").textContent = `${result}`;

        var result = USERnum * 10
    document.getElementById("num10").textContent = `${USERnum}`;
    document.getElementById("multRES10").textContent = `${result}`;
}