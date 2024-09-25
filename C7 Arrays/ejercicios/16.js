function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  //return (array * array.length);

  const porIndice = [];
  for(let i = 0; i < array.length; i=i+1){
  porIndice.push(array[i] * porIndice.length) 
  };
  return porIndice;
};

module.exports = multiplicarElementosPorIndice;
// Paso repasar