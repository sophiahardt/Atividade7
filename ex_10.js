function ex10 () {

    let nome = prompt("Informe o nome do funcionário:");
    let salario_bruto = parseFloat(prompt("Informe seu salário bruto:"));
    
    let desconto_inss = salario_bruto * 0.08;
    let salario_liquido = salario_bruto - desconto_inss;


    console.log("Nome do funcionário:", nome);
    console.log("Salário bruto:", salario_bruto);
    console.log("Valor do desconto INSS:", desconto_inss);
    console.log("Salário líquido:", salario_liquido);
}

   

