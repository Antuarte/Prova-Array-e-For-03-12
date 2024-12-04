console.log(`ITEM 6 - Faça um programa que solicite ao usuário quantos números deseja digitar,
solicite que digite cada número do array e após mostre os números ordenados do maior para menor
`)

let quantNum = parseInt(prompt("Quantos números você deseja digitar?"));
let caixa = [];
for (let i = 0; i < quantNum; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    caixa.push(numero);
} // O de sempre até aqui

// É lógico que todo número após você é maior e anteriora você é menor, e o subtraindo de você (maior),
// terá um número negativo, então ele vai a frente/direita... subtraindo o menor da positivo
//e vai atrás/esquerda... Se der zero é por que é igual a você, então não se move!

// A função b-a subtrai o número seguinte de a para descobrir sua posição
caixa.sort((a, b) => b - a); // Foi preciso a função por que .sort ordena de forma crescente por natureza

// Procura os números na caixa, agora organizados
console.log("Os números ordenados do maior para o menor são:");
alert("Os números ordenados do maior para o menor são:");
caixa.forEach(numero => console.log(numero));
caixa.forEach(numero => alert(numero));