// Lista de Exercícios 05

// 1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.
function nascimento(nome, ano) {
  let idade = 2025 - ano;
  console.log("A/O", nome, "nasceu no ano", ano, "e tem", idade, "anos");
}
nascimento("Pablo", "2008");

// 2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. COnsidere que o veículo faz uma média de 12 Kms/L.
function combustível(litro) {
  return litro * 12;
}
var litros = 24;
console.log(
  "Eu abasteci meu carro com 24 litros, e agora consigo viajar",
  combustível(24),
  "km"
);
