function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  // let sumaTodo = arrayOfNums.reduce(function(acum, numero) {
  //   return acum + numero;
  // });
  // return sumaTodo;

  var total = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    total = total + arrayOfNums[i]; 
  };
  return total;
  return total;

  var sumaNumeros = arrayOfNums.reduce((num1, num2) => num1 + num2);
  return sumaNumeros;  // Pasa nesesito explicacion.

};

module.exports = agregarNumeros;
// paso Explicacion