/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/
("--------------------------------------------------------------O meu--------------------------------------------------------------");
var nome = "JaoGabriel";
console.log("Meu nome é", nome);

var banco = "Santander";
console.log("Banco Santander");

var agência = "4452";
console.log("Numero de agencia", 4452);

var numero = "0321 54.99874";
console.log("Numero da conta, 0321 54.99874");

var $ = "R$41,65";
console.log("Saldo da conta, R$41,65");

console.log("numero da conta", numero, "| saldo", $);

console.log("    + Depósito: 2,50");
$ = $ + 2.5;
console.log("    + Depósito: 10,50");
$ = $ + 10.5;
console.log("    - Saque: 6,50");
$ = $ - 6.5;
console.log("    + Depósito: 32,40");
$ = $ + 32.4;
console.log("    - Saque: 8,50");
$ = $ - 88.5;

console.log("*****************", banco, "*****************");
console.log("Cliente:", nome);
console.log("agência:", agência, "| Conta:", numero);
console.log("Seu saldo é de R$", 72.05);
