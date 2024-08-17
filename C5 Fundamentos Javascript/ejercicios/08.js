function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna false si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:

  return Number.isInteger(numero);
  //return numero.isInteger();

  let resultado = Number.isInteger(numero);
  return resultado;

  // if(numero % 1 != 0) { return true; }
  // else if (numero % 1 != -0) { return true; }
  // else return false;

    // numero.isInteger(numero);
  };
  module.exports = esNumeroEntero;
// paso