function ex07() {

    let codigo = prompt("Informe o código do picolé (a, b, c, d, e, f, g, h, i):");
    let preco;
    let sabor;

    switch (codigo) {
        case 'a':
            sabor = "chocolate";
            preco = "1,50";
            break;
        case 'b':
            sabor = "Morango";
            preco = "2,50";
            break;
        case 'c':
            sabor = "Creme";
            preco = "2,50";
            break;
        case 'd':
            sabor = "Manga";
            preco = "3,20";
            break;
        case 'e':
            sabor = "Melancia";
            preco = "3,40";
            break;
        case 'f':
            sabor = "Vanilla Ice";
            preco = "3,00";
            break;
        case 'g':
            sabor = "Céu Azul";
            preco = "3,60";
            break;
        case 'h':
            sabor = "Brownie";
            preco = "4,00";
            break;
        case 'i':
            sabor = "Hawaiano";
            preco = "5,00";
            break;
        default:
            alert("Código inválido!");
    }

    console.log("Sabor:", sabor, "| Preço: R$", preco);

}