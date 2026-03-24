function somarNumeros() {
    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseFloat(prompt("Digite um número:"));

        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Digite um número válido!");
        }

        continuar = confirm("Deseja adicionar mais números?");
    }

    alert("A soma dos números é: " + soma);
}