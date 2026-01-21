/* 
alerta de área do triangulo
    var area = 5;
    var b = 23;
    alert('área do triangulo é: '+(area*b)/2); 
    
    */
    
    /*
    alerta de bhaskara    
    var a = 20;
    let b = 5;
    let c = 163;
    let delta = (b**2) - (4*a*c);
    if (delta < 0) {
        alert('não existe raiz real');
    } else {
        let x = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        alert('as raízes são'+x1+' e '+x2);
    }    
    */
   /*let base = 12;
   let altura = 12;
   
   if ((altura > 0 || (base!=0) && base==altura)){
   alert('é um quadrado');
}else {
    alert('é um retangulo');
}*/ 
/*
let idade = 18;
if (idade >= 18){
    alert('você é maior de idade');
} else {
    alert('você é menor de idade');
}
*/

//Conversão de C para F
let celsius = window.prompt('a temperatura em Celsius:');
let fahrenheit = (celsius * 9/5) + 32;
alert(celsius+'°C é igual a '+fahrenheit+'°F');

//estrutura de repetição
/*while 
for
do {

}while

switch (opções) {
    case 1:
        alert('opção 1 selecionada');
        break;
}
*/

//Array
let carrinho = ['arroz', 'feijão', 'macarrão'];
let carrinho2 = [1,2,3,4,5];

//objeto
let carro = {
    modelo: 'A4',
    fabricante: 'Audi',
    ano: 2020,
    valor: 190000
}
console.log(carro.modelo);
console.log(carro['fabricante']);

//função
function soma(a, b){
    return a + b;
}