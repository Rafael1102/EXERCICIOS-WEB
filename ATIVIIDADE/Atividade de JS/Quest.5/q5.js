//Crie um programa em Javascript que leia um número inteiro e informe se ele é primo ou não primo. Lembre-se: Um número é primo se for maior que 1 e divisível apenas por 1 e por ele mesmo.
let numero = parseInt(prompt("Digite um número inteiro:"));
let ePrimo = true;
if (numero <= 1) {
    ePrimo = false;
} else {
     for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            ePrimo = false;
            break;
        }
    }
}
if (ePrimo) {
    alert(numero + " é primo.");
} else {
    alert(numero + " não é primo.");
}
