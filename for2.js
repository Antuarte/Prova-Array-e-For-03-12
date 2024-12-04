console.log(`ITEM 2 - Faça um programa que solicite ao usuário quantos números deseja digitar,
solicite que digite cada número do array e mostre o inverso da ordem que o usuário digitou`)

let quantNum = parseInt(prompt("Quantos números você deseja digitar?"));
let caixa = [];

for (let i = 0; i < quantNum; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    caixa.push(numero);
}

// Mesmos passos que o anterior, mas mostra os números na ordem inversa
console.log("Os números digitados na ordem inversa são:");
alert("Os números digitados na ordem inversa são:");
caixa.reverse().forEach(numero => alert(numero));