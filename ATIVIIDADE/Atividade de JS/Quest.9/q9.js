let maiores = 0;
let menores = 0;

for (let i = 1; i <= 5; i++) {
  let nome = prompt("Digite o nome da pessoa " + i + " (ou digite '0' para encerrar):");

  if (nome === null || nome === "0") {
    break;
  }

  let idade = parseInt(prompt("Digite a idade de " + nome + ":"));

  if (idade >= 18) {
    maiores++;
  } else {
    menores++;
  }
}

alert("Maiores de idade: " + maiores + "\nMenores de idade: " + menores);
