function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  // let nuevoArreglo = array.map(function(numero, indice) {
  //   return numero * indice;
  // });
  // return nuevoArreglo

  const porIndice = [];
  for(let i = 0; i < array.length; i=i+1){
  porIndice.push(array[i] * porIndice.length) 
  };
  return porIndice;

};

module.exports = multiplicarElementosPorIndice;
// Paso repasar