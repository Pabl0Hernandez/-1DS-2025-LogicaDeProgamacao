//Laço de repetição - FOR

// O professor te colocou de castigo e pediu para você escrever a frase "Eu vou prestar atenção às aulas."

for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção às aulas.");
}

//Escreva todos os números de 1 a 20 com loop for
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//mostre no console do sistema os números pares entre 1 e 20
for (let i = 1; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}

//Dado um vetor, calsule e exiba o somatório de seus elementos
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("Soma dos elementos:", soma);

// Dado um vetor, calcule e exiba a quantidade de pares e de ímpares
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var pares = 0;
var impares = 0;

for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("quantidade de pares:", pares);
console.log("quantidade de impares:", impares);

// Dado um vetor, multiplique todos os seus elementos por 3 com o laço FOR
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log("Original:", numeros);
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}
console.log("Seus elementos multiplicado por três, ficaram:", numeros);

//Dada uma matriz 2x3, mostre ao usuário todos os seus elementos com as respectivas posições
var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    // console.log("Matriz[", linha, "][", coluna, "]=", matriz[linha][coluna]);
    console.log(`Matriz[][] = ${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
}

//****************Laço Repetição - While / Do While ****************
//While testa a condição antes de entrar no laço de repetição
//Se a condição for inicialmente falsa, o laço não é executado nenhuma vez
var t = 100;

while (t > 10) {
  console.log("Entrei no laço While...");
  t = 0;
}
console.log("Terminei!");

//Exemplo de While com
var i = 0;
while (i <= 100) {
  console.log(`Escrita de linha ${i}`);
  i++;
}

//Laço repetição While
// While(condição){
// fragmentos e código
// fragmentos e código
// fragmentos e código
// fragmentos e código
// contador++ |  nesta parte o contador é a variavel de controle de acesso
// }
// exemplo que funciona somente no navegador
// var senhaCorreta = "1234";
// var tentativa = "";

// while (tentativa !== senhaCorreta) {
//   tentativa = prompt("Digite a senha:");
// }

//Do-While testa a condição somente no final do laço de repetição
//Sendo assim, qualquer quer seja a condição, o laço é executado pelo menos uma vez.
var x = 10;

do {
  console.log("Entrei no laço Do-While..");
  x = 0;
} while (x > 10);

console.log("Terminei!");
