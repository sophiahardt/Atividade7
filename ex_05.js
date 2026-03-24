function ex05() {
    
    let numero = parseInt(prompt("Informe um número inteiro:"));
    
    if (numero % 2 === 0){
        numero = numero + 1;
        console.log("O número informado é par. Tranformado em ímpar:", numero);
    }else{
        numero = numero + 1;
        console.log("O número informado é ímpar. Tranformado em par:", numero);
    }

}