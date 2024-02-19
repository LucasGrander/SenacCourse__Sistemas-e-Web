const namelist = ["Lucas", "Ricardo", "José", "Ana", "Bia"];

const search = "Ricardo";

var found = false

for(i = 0; i < namelist.length; i++){
    if(namelist[i] === search){
        found = true
        break;  
    }
}

if(found){
    console.log(`O nome encontrado na lista foi: ${search}`);
} else{
    console.log(`O nome ${search} não foi encontrado na lista`);
}