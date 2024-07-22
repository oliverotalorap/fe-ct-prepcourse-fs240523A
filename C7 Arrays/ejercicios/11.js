function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  const duplicarElementos = [];
  for(let i = 0; i < array.length; i++){
  duplicarElementos.push(array[i] * 2 ) }
  return duplicarElementos; 
}

module.exports = duplicarElementos;
