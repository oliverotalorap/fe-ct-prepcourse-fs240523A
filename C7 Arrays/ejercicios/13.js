function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var nuevo =[];
   for (var i = 0; i < array.length; i++)
   if(array[i] % 2 == 0){
      nuevo.push(array[i])
   };
   return nuevo;
   //return nuevo.length;
};

module.exports = filtrarNumerosPares;
// paso Repasar