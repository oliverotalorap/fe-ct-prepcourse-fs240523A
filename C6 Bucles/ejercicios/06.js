function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  //num.esString  // pasar a strin e igualarlo

  if (num <= 999 && num >99 ) {return true; }
  else return false;
}
module.exports = tieneTresDigitos;
// paso