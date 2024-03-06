const namelist = ["Lucas", "Ricardo", "José", "Ana", "Bia"];

const search = "Ana";

if(namelist.includes(search)){
    console.log(`O nome encontrado na lista foi: ${search}`);
} else{
    console.log(`O nome ${search} não foi encontrado na lista`);
}