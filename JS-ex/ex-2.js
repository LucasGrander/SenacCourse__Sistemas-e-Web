var a = 1;
console.log("var ="+ " " + a);

    if(true){
        let b = 2;
        console.log("let ="+ " " + b);
    }

    
    // caso o console.log que esteja dentro do bloco "if" seja alterado de lugar (para fora do bloco), ele dará uma mensagem de erro, pois, a variável "let" funcionará somente dentro do bloco aplicado.



    if(true){
        let c = 2;
    }

    console.log(c);