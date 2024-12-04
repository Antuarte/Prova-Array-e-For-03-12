console.log(`ITEM 3 - Faça um programa que solicite ao usuário quantos números deseja digitar,
solicite que digite cada número do array e mostre ao usuário qual foi o maior e qual foi o menor
número digitado;`)

// Repetição de inserção de número
let quantNum = parseInt(prompt("Quantos números você deseja digitar?"));

// Caixa array vazia
let caixa = [];

// Solicita que digite cada número
for (let i = 0; i < quantNum; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    caixa.push(numero); // Adiciona o número ao array (caixa anteriormente vazia)
}

// Inicializa variáveis para armazenar o maior e o menor número
let maior = caixa[0];// 0 para inicializar e por enquanto ninguém é maior
let menor = caixa[0];// nem menor...

// Percorre o array para encontrar o maior e o menor número
for (let i = 0; i < caixa.length; i++) { // lenght = comprimento - leia-se...
    //Executar For enquanto variável "i" for menor que o comprimento da caixa (Array), e incremento de +1
    if (caixa[i] > maior) {
        maior = caixa[i]; // Atualiza o maior número
    }
    if (caixa[i] < menor) {
        menor = caixa[i]; // Atualiza o menor número
    } // Esse [i] se associa ao i = 0, o própio for tem incremento então vai aumentando o valor de i,
}// fazendo o laço buscar todo os índices do array

// Mostra o maior e o menor número digitado
console.log("O maior número digitado foi: " + maior);
console.log("O menor número digitado foi: " + menor);
alert("O maior número digitado foi: " + maior);
alert("O menor número digitado foi: " + menor);
