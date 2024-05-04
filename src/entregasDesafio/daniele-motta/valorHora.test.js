// Testes aqui

// describe - descreve nome da funcao ou classe que estamos testando
// test (iremos utilizar esse apesar de testar unitario) -> teste de integração ou it -> teste unitario = função que realiza o nosso teste

const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("calcularValorPorHora", () => {
  test("Deve retornar dado o salário 1412, 9 por hora", () => {
    //cenario
    const rendaMensal = 1412;
    //comportamento
    const resultado = calcularValorPorHora(rendaMensal);
    //validação da saída
    expect(resultado).toEqual(9);
  });
});
