function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

let numeroMayor = array[0];
let indiceMayor = 0;
array.forEach(function(numero, indice) {
  if (numero > numeroMayor) {numeroMayor = numero; 
    indiceMayor = indice;   } 
  });
return indiceMayor;  

// let numeroMaror = array[0];
// let indiceMayor = 0;
// for (let i = 0; i < array.length; i++) {
//  if (array[i] > numeroMaror) {numeroMaror = array[i]
//   indiceMayor = indice;   // Donde muestra el error-
//  } };
//  return indiceMayor;  // NO PASO Estudiarla

  //  const maxNumero = Math.max(...array);
  //  const indiceMax = array.indexOf(maxNumero);
  //  if(array.length < 0) return 0;
  //  return indiceMax;    //NO PASO Estudiarlo

};

module.exports = encontrarIndiceMayor;
// paso Repasar