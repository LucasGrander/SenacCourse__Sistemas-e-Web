var a = 1;
console.log("var ="+ " " + a);

    if(true){
        let b = 2;
        console.log("let ="+ " " + b);
    }

    // caso o "console.log" que esteja dentro do bloco "if" seja alterado de lugar (para fora do bloco), ele dará uma mensagem de erro, pois, a declaração "let" funcionará somente dentro do bloco aplicado.


    //Exemplo de má funcionamento:

    if(true){
        let c = 2;
    }

    console.log(c);