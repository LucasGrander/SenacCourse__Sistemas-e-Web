// simplificado
const nota1 = 7;
const nota2 = 5;
const nota3 = 4;
const nota4 = 6;

const mediaNOTAS = (nota1 + nota2 + nota3 + nota4) / 4;

const result = mediaNOTAS >=7 ? "O aluno está aprovado!" : "O aluno está reprovado!";

console.log(`${result}`);


// usando if and else
const n1 = 7;
const n2 = 7;
const n3 = 7;
const n4 = 7;

const mediaN = (n1 + n2 + n3 + n4) / 4;

if(mediaN >=7){
    console.log("Aluno aprovado!");
}
else{
    console.log("Aluno reprovado!");
}