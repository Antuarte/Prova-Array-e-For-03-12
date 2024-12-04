console.log(`ITEM 4 - Faça um programa que solicite ao usuário quantos números deseja digitar,
solicite que digite cada número do array e mostre a soma total dos números;`)

let quantNum = parseInt(prompt("Quantos números você deseja digitar?"));

let caixa = [];

for (let i = 0; i < quantNum; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    caixa.push(numero);
}

let soma = 0;

// Percorre o array para calcular a soma dos números
for (let i = 0; i < caixa.length; i++) { // Não esquecer que i = 0 para buscar do 1° índice do array em diante!
    soma += caixa[i]; // Adiciona os números que encontra no array na soma
}

console.log("A soma total dos números digitados é: " + soma);
alert("A soma total dos números digitados é: " + soma);