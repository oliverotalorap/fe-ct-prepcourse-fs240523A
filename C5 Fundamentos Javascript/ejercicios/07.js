function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  
  let tipoDato = typeof valor;
  return tipoDato;
//  return typeof valor;
}


module.exports = esTipoDato;
// paso