function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var total = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    total = total + arrayOfNums[i]; 
  };
  return total;

  var sumaNumeros = arrayOfNums.reduce((num1, num2) => num1 + num2);
  return sumaNumeros;
};
module.exports = agregarNumeros;
// paso Explicacion