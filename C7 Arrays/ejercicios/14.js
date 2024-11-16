function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

// let contador = 0;
// //array.forEach(element => {if (element > 10) {contador++
// array.forEach(function(elemento) {if (elemento > 10) {contador++
//   }; });
// return contador;

  var nuevo =[];
   for (var i = 0; i < array.length; i++)
   if(array[i] > 10){ nuevo.push(array[i])
   
   };
   return nuevo.length;
   return nuevo.length;
};

module.exports = contarElementosMayoresA10;
// paso EXPLICACION