function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

   const maxNumero = Math.max(...array);
   const indiceMax = array.indexOf(maxNumero);
   return indiceMax;

};
module.exports = encontrarIndiceMayor;
// NO PASO en el HomeWork, pero si paso en mis Ensayos