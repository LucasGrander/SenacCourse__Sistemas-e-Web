var user, password;

user = "Lucas";

password = "******";

if(user === "Lucas" && password === "****"){
    console.log(`Acesso permitido!`);
} else if(user === "Lucas" && password === "*****"){
    console.log(`Acesso Permitido! O usuário ou a senha está inválido!`);
} else{
    console.log(`Acesso negado! O usuário ou a senha está inválido!`);
}
