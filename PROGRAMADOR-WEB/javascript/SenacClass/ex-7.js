function somar1(){
    const res = 2 + 2;
    console.log(res);
};

 // A funcão não é executável simplesmente por existir no código... para chamar uma funcão devemos escrever o nome declarada a ela:

 function somar2(num1, num2){
    const res = num1 + num2;

    console.log(res);
 };

 somar3(1, 2);

 function somar3(num1, num2){
    const res = num1 - num2;
    
    return res;
 };

const a = somar3(10, 10);

console.log(a);

 console.log(somar3(20, 10));
