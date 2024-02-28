// IF is a condition, for example: If a condition is true, will execute some code,
//                                 If its not true (false), will do another thing
let idade = 19;

if( idade >= 20){
    document.getElementById("myh20").textContent = `Você está velho!`;
}
else{
    document.getElementById("myh20").textContent = `Você está novo!`;
};


let time = 11;

if( time <= 12){
    document.getElementById("myh21").textContent = `Está muito cedo!`;
}
else{
    document.getElementById("myh21").textContent = `Está muito Tarde!`;
};

console.log("-------------------------")
console.log("Boolean type:")
let ismen = false;

if(ismen){
    console.log("Você é homem!");
}
else{
    console.log("Você é mulher!");
};

// verify age for acess of the site

let verify;

document.getElementById("mysubmit4").onclick = function(){
    verify = document.getElementById("myh22").value;
    verify = Number(verify);
    if(verify <= 0){
        document.getElementById("myh23").textContent = `Digite um número maior que 0!`;
    }
    else if(verify >= 18){
        document.getElementById("myh23").textContent = `Com ${verify} anos você pode acessar o site!`;
    }
    else{
        document.getElementById("myh23").textContent = `Com ${verify} anos você não pode acessar o site!`;
    }
}

// now ill use new tips of input, the checkbox and the radio...

const cb = document.getElementById("selectbox");
const result = document.getElementById("checkh1");
const analytc = document.getElementById("analytc");
const master = document.getElementById("mastercard")
const visa = document.getElementById("visacard")
const ouro = document.getElementById("ourocard")

const visasign = document.getElementById("visasign");
const mastersign = document.getElementById("mastersign");
const ourosign = document.getElementById("ourosign");

analytc.onclick = function(){
    if(cb.checked){
       var concateanar = result.textContent = `Está aprendendo :)`;
    }
    else{
        result.textContent = `Não está aprendendo :(`
    }
    if(master.checked){
        mastersign.textContent = `Você selecionou o pagamento acima: MasterCard`
        visasign.textContent = ``
        ourosign.textContent = ``
    }
    else if(visa.checked){
        visasign.textContent = `Você selecionou o pagamento acima: VisaCard`
        mastersign.textContent = ``
        ourosign.textContent = ``
    }
    else if(ouro.checked){
        ourosign.textContent = `Você selecionou o pagamento acima: OuroCard`
        mastersign.textContent = ``
        visasign.textContent = ``
    }
    else{
        result.textContent = `${result.textContent} -- selecione abaixo uma forma de pagamento!`
    }
}

// using a ternary operator, shortcut to if and else ----->
//                           for example: condition ? "codeIfTrue" : "codeIfFalse";
//                                        age >=18  ?  "You are old!" : "You are new!"

// eu dei 2 variáveis chamada saudacao1 e saudacao2, onde, o valor "true" delas indica a ação... Caso contrário "false", executará a outra variável.

document.getElementById("btnhora").onclick = function(){
    let hora = document.getElementById("inputhora").value;
    let cump = document.getElementById("cump");
    hora = Number(hora);

    let saudacao = hora <= 12 ? "Bom dia!" : "Boa tarde!";
    let saudacao1 = hora == 0 ? "Digite um horário" : saudacao;
    let saudacao2 = hora < 0 ? "Não pode ser negativo!" : saudacao1;
    cump.textContent = `${saudacao, saudacao1, saudacao2}`;
}


// We can do same thing thinking in a shop giving a % discount of the price

let clientINPT = document.getElementById("desc");
let calcDesc = document.getElementById("descBTN");
let descRES = document.getElementById("descRES");

calcDesc.onclick = function(){

    let valueProd = clientINPT.value;
    valueProd = Number(valueProd);

    if(valueProd <= 0){
        descRES.textContent = `O valor não pode ser nulo ou abaixo de R$0.00`;
    }
    else if(valueProd >= 0 && valueProd < 10){
        const descount = valueProd * 0/100;
        const valFINAL = valueProd - descount;
        const percent = ((100 ) - valFINAL * 100 / valueProd);
        descRES.textContent = `O desconto sob os R$${valueProd} foi de ${percent}% || VALOR À PAGAR: R$ ${valFINAL}`;
    }
    else if(valueProd >= 10 && valueProd < 100){
        const descount = valueProd * 10/100;
        const valFINAL = valueProd - descount;
        const percent = ((100 ) - valFINAL * 100 / valueProd);
        descRES.textContent = `O desconto sob os R$${valueProd} foi de ${percent}% || VALOR À PAGAR: R$ ${valFINAL}`;
    }
    else if(valueProd >= 100 && valueProd < 200){
        const descount = valueProd * 20/100;
        const valFINAL = valueProd - descount;
        const percent = ((100 ) - valFINAL * 100 / valueProd);
        descRES.textContent = `O desconto sob os R$${valueProd} foi de ${percent}% || VALOR À PAGAR: R$ ${valFINAL}`;
    }
    else if(valueProd >= 200 && valueProd < 300){
        const descount = valueProd * 30/100;
        const valFINAL = valueProd - descount;
        const percent = ((100 ) - valFINAL * 100 / valueProd);
        descRES.textContent = `O desconto sob os R$${valueProd} foi de ${percent}% || VALOR À PAGAR: R$ ${valFINAL}`;
    }
    else{
        const descount = valueProd * 40/100;
        const valFINAL = valueProd - descount;
        const percent = ((100 ) - valFINAL * 100 / valueProd);
        descRES.textContent = `O desconto sob os R$${valueProd} foi de ${percent}% || VALOR À PAGAR: R$ ${valFINAL}`;
    };
};


// using "switch" for trade to many else if
// days of the week
let day = 1;

switch(day){
    case 1:
        console.log(`Segunda-feira`);
        break;
    case 2:
        console.log(`Terça-feira`);
        break;
    case 3:
        console.log(`Quarta-feira`);
        break;
    case 4:
        console.log(`Quinta-feira`);
        break;
    case 5:
        console.log(`Sexta-feira`);
        break;
    case 6:
        console.log(`Sábado`);
        break;
    case 7:
        console.log(`Domingo`);
        break;
    default:
        console.log(`${day}, não é um dia da semana!`);
        break;
};

// calculate media of grades

let testScore = 71;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";

}
console.log(`Your Grade is ${letterGrade} !!!`)

//String methods = manipulate text

let myname = "Lucas";

console.log(`myname.CharAt(0) = ` + myname.charAt(0))
console.log(`myname.indexOf("s") = ` + myname.indexOf("s"))
console.log(`myname.lastIndexOf("s") = ` + myname.lastIndexOf("s"))
console.log(`myname.lenght = ` + myname.length);
console.log(`myname.trim = ` + myname.trim(myname));
console.log(`myname.toUpperCase = ` + myname.toUpperCase(myname));
console.log(`myname.toLowerCase = ` + myname.toLowerCase(myname));
console.log(`myname.repeat(3) = ` + myname.repeat(3));
console.log(`myname.startsWith("L") = ` + myname.startsWith("L"));
console.log(`myname.endsWith(A) = ` + myname.endsWith("A"));
console.log(`myname.includes(Z) = ` + myname.includes("Z"));
console.log(`myname.replaceAll("s", "Oi") = ` + myname.replaceAll("s", "Oi"));
console.log(`myname.padStart(15, "0") = ` + myname.padStart(15, "0"));
console.log(`myname.padEnd(15, "0") = ` + myname.padEnd(15, "0"));


// now ill do a STRING SLICING, create a sub string into a string

const COMPLETEname = "Lucas Grander";
let NAMEfirst = COMPLETEname.slice(0, 5)
let NAMElast = COMPLETEname.slice(6, 13)
let firstCHAR = COMPLETEname.slice(0, 1);
let lastCHAR = COMPLETEname.slice(-1);
console.log(NAMEfirst);
console.log(NAMElast);
console.log(firstCHAR);
console.log(lastCHAR);

// program to catch first name or last name, designed by the user ---------------->>

let catchNAME = COMPLETEname.slice(0, COMPLETEname.indexOf(" "));
console.log(catchNAME)

let catchApelid = COMPLETEname.slice(COMPLETEname.indexOf(" ") + 1)
 console.log(catchApelid)

 const email = "lucasgrander@gmail.com";
 let usernameEmail = email.slice(0, email.indexOf("@"));
 let emailTYPE = email.slice(email.indexOf("@"));
 console.log(usernameEmail)
 console.log(emailTYPE)

 // method Chaining --->> Call a metod after calls another
//                   --->> Using one line of code


// without the method
// document.getElementById("chainingBTN").onclick = function(){
// var chainingUSER = document.getElementById("chainingINPUT").value;
// chainingUSER = chainingUSER.trim();

// let upper = chainingUSER.charAt(0);
// upper = upper.toUpperCase();

// let extra = chainingUSER.slice(1);
// let lower = extra.toLowerCase();

// userCAPITALIZED = upper + lower;

// document.getElementById("chainingRES").textContent = `${userCAPITALIZED}`;
// }

// with the method
chainingUSER = "dSasdaLuCAS"
let corninho = chainingUSER.trim().charAt(0).toUpperCase() + chainingUSER.trim().slice(1).toLowerCase();
console.log(corninho)

//operadores de lógica, como o && ---->> que significa "E" ////// e o operador || ----->> que significa "OU" ///////// também temos o ! ----->> que significa "diferente de"

let logica = "hello"
let logica2 = 100

if(logica == "hello" && logica2 == 100){
    console.log("deu certo a lógica")
}

let logged = false;
let userlog;
let passlog;

// while(!logged){
//     // userlog = window.prompt("Enter your username");
//     // passlog = window.prompt("Enter your password");

//     if(userlog === "name" && passlog === "passw"){
//         logged = true;
//         console.log("ur logged");
// }
//     else{
//         console.log("u arent logged");
//     }
// }

// ------------------------------------------------------------------  

//for loops ---------->> for while, do something for amount times

for(let i = 0; i <= 3; i++){
     console.log("hello")
}
