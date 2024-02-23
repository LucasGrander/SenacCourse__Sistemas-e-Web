const num = [0, 1, 2, 3, 4 ,5, 6, 7, 8, 9, 10];
const multiplicar = 10;

for(i = 0; i <= num.length - 1; i++){
    var mult = num[i]*multiplicar;
    console.log(`${multiplicar} x ${num[i]}: ${mult}`);
};