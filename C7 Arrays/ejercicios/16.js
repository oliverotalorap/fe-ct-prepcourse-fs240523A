function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var nuevo =[];
  for (var i = 0; i < array.length; i++)
  if(array[i] < array.length ) {
     nuevo.push(array[i])
  };

  return nuevo * array.length;
};

module.exports = multiplicarElementosPorIndice;
// NO PASO EXPLICACION