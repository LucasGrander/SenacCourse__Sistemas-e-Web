const usernameFIELD = document.getElementById("userLOGIN");
const passwordFIELD = document.getElementById("userPASSWORD");
const loginRES = document.getElementById("clientRES");

document.getElementById("acess").onclick = function(){
    const username = usernameFIELD.value;
    const password = passwordFIELD.value; 


if(username === "isabelly" && password === "12345"){
    loginRES.innerHTML = `Seja bem-vindo, ${username}! <img src="res/loading-gif.gif">`;
    loginRES.style.color = "rgb(60, 255, 60)";
    

    setTimeout(()=>{
        window.location.href = "home.html";
    }, 1500)

}
else{
    loginRES.innerHTML = `Usuário ou senha incorreto. Tente novamente! `;
    loginRES.style.color = "red";
    }
}