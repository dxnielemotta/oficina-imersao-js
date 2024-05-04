const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");

const moduloPacote = require("../../dominio/calculadora/Projeto/pacote");
const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

const {
  TAXAS_CONTRATUAIS_POR_PACOTE,
} = require("../../dominio/calculadora/constantes/constantes");

describe("valorProjeto", () => {
  test("Deve retornar o valor total do projeto dado as funcionalidades e o valorHora = 1", () => {
    const funcionalidades = ["ssr", "setup"];
    const valorHora = 1;

    const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);

    const pacote = moduloPacote.calcularPacote(totalDeHorasPorProjeto);

    const taxa = TAXAS_CONTRATUAIS_POR_PACOTE[pacote];

    const valorBase = totalDeHorasPorProjeto * valorHora;

    const valorEsperado = Math.round(valorBase * taxa);

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toEqual(valorEsperado);
  });

  test("Deve retornar o valor total do projeto dado as funcionalidades e o valorHora = 2", () => {
    const funcionalidades = [
      "ssr",
      "setup",
      "formulario",
      "responsividade",
      "formulario",
    ];
    const valorHora = 2;

    const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);

    const pacote = moduloPacote.calcularPacote(totalDeHorasPorProjeto);

    const taxa = TAXAS_CONTRATUAIS_POR_PACOTE[pacote];

    const valorBase = totalDeHorasPorProjeto * valorHora;

    const valorEsperado = Math.round(valorBase * taxa);

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toEqual(valorEsperado);
  });
  test("Deve retornar o valor total = 0 do projeto dado as funcionalidades e o valorHora = 0", () => {
    const funcionalidades = [
      "ssr",
      "setup",
      "formulario",
      "responsividade",
      "formulario",
    ];
    const valorHora = 0;

    const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);

    const pacote = moduloPacote.calcularPacote(totalDeHorasPorProjeto);

    const taxa = TAXAS_CONTRATUAIS_POR_PACOTE[pacote];

    const valorBase = totalDeHorasPorProjeto * valorHora;

    const valorEsperado = Math.round(valorBase * taxa);

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(resultado).toEqual(valorEsperado);
  });
});
