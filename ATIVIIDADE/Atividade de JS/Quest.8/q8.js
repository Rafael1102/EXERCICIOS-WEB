//Crie um programa em Javascript que solicite um número inteiro N e indique se ele é par ou ímpar. 
let N = parseInt(prompt("Digite um número inteiro: "));

if (N % 2 === 0) {
    alert("O número " + N + " é par.");    
} else {
    alert("O número " + N + " é ímpar.");
}
