function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y 
  //devuelve el promedio de las notas.
  // Tu código:

//   let promedioTest = resultadosTest.reduce(function(acum, numero) {
//    return acum + numero;
//  });
//  return promedioTest / resultadosTest.length;

  var total = 0;
   for (let i = 0; i < resultadosTest.length; i++ ){
      total = total + resultadosTest[i];
   }; 
   return total / resultadosTest.length;
   return total / resultadosTest.length;
};

module.exports = promedioResultadosTest;
