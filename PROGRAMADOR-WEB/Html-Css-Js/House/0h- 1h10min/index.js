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

