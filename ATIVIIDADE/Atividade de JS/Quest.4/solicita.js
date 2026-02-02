
let temperatura = parseFloat(prompt("Digite a temperatura:"));
let tipoConversao = prompt("Digite 'C' para converter para Celsius ou 'F' para converter para Fahrenheit:");
//parseFloat converte string para número decimal, prompt exibe uma caixa de diálogo para o usuário inserir dados, alert exibe uma mensagem para o usuário.

if (tipoConversao === "C" || tipoConversao === "c") {
    let celsius = (temperatura - 32) * 5/9;
    alert(temperatura + "°F equivalem a " + celsius.toFixed(2) + "°C");
} else if (tipoConversao === "F" || tipoConversao === "f") {
    let fahrenheit = (temperatura * 9/5) + 32;
    alert(temperatura + "°C equivalem a " + fahrenheit.toFixed(2) + "°F");
} else {
    alert("Tipo de conversão inválido!");
}
//se o usuário digitar 'C' ou 'c', converte de Fahrenheit para Celsius; se digitar 'F' ou 'f', converte de Celsius para Fahrenheit; caso contrário, exibe uma mensagem de erro.