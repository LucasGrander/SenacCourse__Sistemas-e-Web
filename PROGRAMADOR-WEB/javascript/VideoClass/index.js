// writing on html using javascript

document.getElementById(`myh1`).textContent = `hello!!`;
document.getElementById(`myh2`).textContent = `i like pizza!`;


// declaring a var, let and const

let age = 20;
document.getElementById(`myh3`).textContent = age;

let firstname;
firstname = "Lucas";
document.getElementById(`myh4`).textContent = `seu nome é ${firstname}`;


// declaring the type of var, let or const writted

var type = typeof(age);
document.getElementById(`p3`).textContent = `${type}`;

var type = typeof(firstname);
document.getElementById(`p4`).textContent = `${type}`;


// declaring booleans

let online = false;

document.getElementById(`myh5`).textContent = `Friend is online: ${online}`;


// declaring another name only for training

let fullname  = 'Lucas Grander';
let idd = 18;
let studying = true;

document.getElementById(`myh6`).textContent = ` your name is: ${fullname}`;

document.getElementById(`myh7`).textContent = `Your age are: ${idd}`;

document.getElementById(`myh8`).textContent = `Studying: ${studying}`;


// training arithmetic operators = (+, -, * and /)

var x = 10;      //  x=10

x = x + 1;      //  x=11

x = x + 3;     //   x=14

x = x * 10;   //    x=140
document.getElementById("myh9").textContent = `${x}`;

//if I use another operator, the variable "x", will be changed


// we can simplify this equation, using the operator and  equal sign, example:

var z = 10;

z += 2;         //  z=12
z -= 7;        //   z=5
z **=5;       //    z=3125 
z /= 125     //     z=25
document.getElementById("myh10").textContent = (`${z}`);


// how to accept user input, using prompt or textbox

// i will ocult this way below because i dont want see this method on my html, the prompt way:

// let user = window.prompt("qual é o seu nome?");
// document.getElementById("myh11").textContent = user;


//another way is using a inputbox

// ".onclick" means that when you click on the button, word, or something else. This action will call the function

// the ".value" on the final of the code means if you put a text on the inputbox, this "text value" will be repassed to variable "username".

// after this, u can choose a method for show the username writted, for example i used my H1 with "id = myh13"

let username;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("myh12").value;
    document.getElementById('myh13').textContent = `o nome de usuário digitado foi: ${username}`;
}


// now ill learn how to do a type conversion

let anyThing;

document.getElementById('mysubmit2').onclick = function(){
    anyThing = document.getElementById('myh14').value;
    anyThing = Number(anyThing);
    anyThing += 1;
    document.getElementById("myh15").textContent = `o valor digitado foi ${anyThing} e o seu tipo é: ${typeof anyThing}`;
};


// const is a variable that cant be changed

const PI = 3.14159;
let radius;
let circ;

// const = 4.15        - - - - if I execute the code with this modify, the code will crash, because I cant change the variable "const"

document.getElementById("mysubmit3").onclick = function(){
    radius = document.getElementById("myh16").value;
    radius = Number(radius);
    circ = 2 * PI * radius;
    document.getElementById("myh18").textContent = `A circunferência é ${circ}cm.`
};




// javascript has some libraries, for example, we got a math library ---------------->

let xx = 10;
let yy = 2;
let zz = 1;
// zz = Math.round(xx);         === Arredonda o decimal para cima ou baixo, com base em 0,5

// zz = Math.floor(xx);         === Arrendonda para baixo

// zz = Math.ceil(xx);          === Arrendonda para cima

// zz = Math.trunc(xx);         === Remove a parte decimal

// zz = Math.pow(xx, yy);       === Faz um número elevado a outro, nesse caso: xx elevado a yy

// zz = Math.sqrt(xx);          === Devolve a raiz quadrada de xx

// zz = Math.log(xx);           === Retorna o logaritimo natural

// zz = Math.sin(xx);           === Devolve o seno do núm...

// zz = Math.cos(xx);           === Devolve o cosseno do núm...

// zz = Math.tan(xx);           === Devolve a tangente do núm...

// zz = Math.abs(xx);           === Retorna o valor absoluto de xx, ou seja, a distância de xx até zero, sem considerar o sinal

// zz = Math.sign(xx);          === Retorna o sinal de xx como -1, 0 ou 1, indicando se o número é negativo, zero ou positivo.


let max = Math.max(xx, yy, zz);     //pegar o maior núm... 
let min = Math.min(xx, yy, zz);     // pegar o menor núm...
console.log(`Abaixo Biblioteca Math:`);
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);


// now ill pick a random number
const mini = 50;
const maxi = 150;

let randomizeNUM = Math.floor(Math.random() * (maxi - mini)) + mini;

document.getElementById('myh19').textContent = `O sorteio de núm deu: ${randomizeNUM}`;



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

while(!logged){
    
}