function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var total = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
     total = total + arrayOfNums[i]; 
     //total = total + i;  // NO funciono Explicacion
  }
  return total;

}
module.exports = agregarNumeros;
// paso EXPLICACION