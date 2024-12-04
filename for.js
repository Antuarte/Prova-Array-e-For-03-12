console.log(`ITEM 1 - Faça um programa que solicite ao usuário quantos números deseja digitar,
solicite que digite cada número do array e mostre os números digitados.`)

// Quantos números quer digitar? O número que receber é o limite do loop for
let quantNum = parseInt(prompt("Quantos números você deseja digitar?"));

// -- Array de caixa vazia para pôr os números
let caixaDeNumeros = [];

// Vai digitando os números e inserindo na caixa, a quantidade de vezes que digitou no início
for (let i = 0; i < quantNum; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    caixaDeNumeros.push(numero);
}

// Mostra os números digitados
console.log("Os números digitados foram:");
alert("Os números digitados foram:");
caixaDeNumeros.forEach(numero => alert(numero));