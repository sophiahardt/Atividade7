function ex06() {

    let letra = char(prompt("Informe uma letra do alfabeto"));

    letra = letra.toLowerCase();

    if(
        letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u" 
    ) {
        console.log("A letra informada é uma vogal");
    }else{
        console.log("A letra informada é uma consoante")
    }   
}