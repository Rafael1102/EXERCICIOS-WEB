//Crie um programa em Javascript que solicite um número inteiro N e exiba todos os números primos entre 1 e N, utilizando uma estrutura de repetição.
let N = parseInt(prompt("Digite um número inteiro:"));
let resultado = "Números primos entre 1 e " + N + ":\n";
for (let num = 2; num <= N; num++) {
    let ePrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            ePrimo = false;
            break;
        }
    }
    if (ePrimo) {
        resultado += num + " ";
    }
}
alert(resultado);
