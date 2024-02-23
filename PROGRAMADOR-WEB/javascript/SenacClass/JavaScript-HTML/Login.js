const usernameFIELD = document.getElementById("userLOGIN");
const passwordFIELD = document.getElementById("userPASSWORD");
const loginRES = document.getElementById("clientRES");

document.getElementById("acess").onclick = function(){
    const username = usernameFIELD.value;
    const password = passwordFIELD.value; 


if(username === "lucas" && password === "123"){
    loginRES.textContent = `Seja bem-vindo, ${username}!`;
    loginRES.style.color = "rgb(60, 255, 60)";
}
else{
    loginRES.innerHTML = `Usuário ou senha incorreto. Tente novamente!`;
    loginRES.style.color = "red";
    }
}