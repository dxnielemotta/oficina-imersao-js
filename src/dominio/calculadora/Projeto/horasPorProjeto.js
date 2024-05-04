const { HORAS_POR_FUNCIONALIDADE } = require("../constantes/constantes");

const calcularHorasDeProjeto = (listaDeFuncionalidades) =>
  listaDeFuncionalidades
    .map((func) => HORAS_POR_FUNCIONALIDADE[func]) //pegando somente o valor hora do obj
    .reduce((sum, currentValue) => sum + currentValue, 0); //somatoria

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
