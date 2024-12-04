console.log(`ITEM 5 - Faça um programa que solicite ao usuário quantos números deseja digitar,
solicite que digite cada número do array e mostre quantos números são acima de 18 e quantos abaixo de 3`)

let quantNum = parseInt(prompt("Quantos números você deseja digitar?"));
let caixa = [];

for (let i = 0; i < quantNum; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    caixa.push(numero); // Adiciona o número ao array
} // até aqui é o de sempre

// Inicializa contadores para números acima de 18 e abaixo de 3
let acimaDe18 = 0;
let abaixoDe3 = 0;

// Do mesmo jeito que buscou o maior e menor número do array,
//agora vai buscar com referência, o menor tem que ser < 3 e o maior, > 8

//note que ele vai dizer QUANTOS, dos números digitados, são maiores e menores, e NÃO QUAIS
for (let i = 0; i < caixa.length; i++) {
    if (caixa[i] > 18) {
        acimaDe18++;
    }
    if (caixa[i] < 3) {
        abaixoDe3++;
    }
}

console.log("Quantidade de números acima de 18: " + acimaDe18);
console.log("Quantidade de números abaixo de 3: " + abaixoDe3);
alert("Quantidade de números acima de 18: " + acimaDe18);
alert("Quantidade de números abaixo de 3: " + abaixoDe3);