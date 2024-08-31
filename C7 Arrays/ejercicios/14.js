function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var nuevo =[];
   for (var i = 0; i < array.length; i++)
   if(array[i] > 10){
      nuevo.push(array[i])
   };
   return nuevo.length;
}

module.exports = contarElementosMayoresA10;
// paso EXPLICACION