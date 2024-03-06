document.getElementById("giveaway").onclick = function(){

    const min = parseFloat(document.getElementById("num1").value);
    const max = parseFloat(document.getElementById("num2").value);

    const randomNum = Math.round(Math.random() * (max - min)) + min;
    document.getElementById("title").textContent = `Adivinhe o número entre ${min} e ${max}`;
    title.style.color = "white";

    const choosedNum = document.getElementById("numField");
    var tentativas = 0;

    document.getElementById("checkBTN").onclick = function(){
        if(choosedNum.value < min || choosedNum.value == "" || choosedNum.value > max){
            document.getElementById("answer").textContent = `Inválido! Insira um número entre ${min} e ${max}.`;
            answer.style.color = "red";
            tentativas++;
        }
        else if(choosedNum.value < randomNum){
            document.getElementById("answer").textContent = `O número ${choosedNum.value} está baixo. Tente novamente!`;
            answer.style.color = "cyan";
                tentativas++;
        }
        else if(choosedNum.value > randomNum){
            document.getElementById("answer").textContent = `O número ${choosedNum.value} está alto. Tente novamente!`;
            answer.style.color = "#d38613";
                tentativas++;
        }
        else if(choosedNum.value == randomNum){
            document.getElementById("answer").textContent = `Você acertou, o número era o ${randomNum}!!! Tentativas: ${tentativas}`;
            answer.style.color = "green";
        }
    };
};
