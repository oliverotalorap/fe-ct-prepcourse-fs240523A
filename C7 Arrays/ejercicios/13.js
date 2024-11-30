function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

//   let contador = 0;     // ESTUDIARLO NO PASO
// array.forEach(element => {if (element % 2 === 0) {contador++
// //array.forEach(function(elemento) {if (elemento % 2 === 0) {contador++
//   }; });
// return contador;

  var nuevo =[];
   for (var i = 0; i < array.length; i=i+1)
   if(array[i] % 2 == 0){ nuevo.push(array[i]) };
   return nuevo;
  
};

module.exports = filtrarNumerosPares;
// paso EXPLICACION