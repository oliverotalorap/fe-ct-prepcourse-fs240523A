function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var nuevo =[];
  for (var i = 0; i < array.length; i++)
  if(array[i] > 10){
     nuevo.push(array[i])
  };
  return nuevo.Math.max;
}

module.exports = encontrarIndiceMayor;
// no se INVESTIGAR