const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("pacote", () => {
  test("Deve retornar pacote_basico quando o totalHorasPorProjeto for menor que 50", () => {
    const totalDeHorasPorProjeto = 49;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });
  test("Deve retornar pacote_basico quando o totalHorasPorProjeto for igual a 50", () => {
    const totalDeHorasPorProjeto = 50;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });
  test("Deve retornar pacote_intermediario quando o totalHorasPorProjeto for igual a 50", () => {
    const totalDeHorasPorProjeto = 50;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_intermediario");
  });
  test("Deve retornar pacote_premium quando o totalHorasPorProjeto for maior que 100", () => {
    const totalDeHorasPorProjeto = 150;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_premium");
  });

  test("deve retornar undefined se o total de horas exceder o pacote_premium", () => {
    const totalDeHorasPorProjeto = 250;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual(undefined);
  });
});

// describe("pacote", () => {
//   test("Deve retornar pacote_intermediario quando o totalHorasPorProjeto for igual a 50", () => {
//     const totalDeHorasPorProjeto = 50;
//     const result = calcularPacote(totalDeHorasPorProjeto);
//     expect(result).toEqual("pacote_intermediario");
//   });
// });

// describe("pacote", () => {
//   test("Deve retornar pacote_premium quando o totalHorasPorProjeto for maior que 100", () => {
//     const totalDeHorasPorProjeto = 150;
//     const result = calcularPacote(totalDeHorasPorProjeto);
//     expect(result).toEqual("pacote_premium");
//   });
// });
