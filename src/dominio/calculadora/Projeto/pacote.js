const { MAX_HORAS_POR_PACOTE } = require("../constantes/constantes");

const calcularPacote = (totalDeHorasPorProjeto) =>
  Object.entries(MAX_HORAS_POR_PACOTE) // transforma o obj em 2 arrays [key, value], key = nome do pacote, valor = valor associado por hora
    .find(([key, value]) => value > totalDeHorasPorProjeto)[0];

exports.calcularPacote = calcularPacote;
