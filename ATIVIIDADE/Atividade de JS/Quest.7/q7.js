//Crie um programa em Javascript que solicite um número inteiro N e exiba o valor fatorial desse número.
let N = parseInt(prompt("Digite um número inteiro:"));
let fatorial = 1;
for (let i = 2; i <= N; i++) {
    fatorial *= i;
}
alert("O fatorial de " + N + " é: " + fatorial);
