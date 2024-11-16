function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  
let primerValor = array[0];
let resultado = array.every( function(numero) {
  if(numero === primerValor) {
    return true;
  } else return false;
});
return resultado;

let aux = array[0];
return array.every(elem => elem === aux);

  for (var i =0; i < array.length; i++ ){
    if(array[i] === array[i = 1]) { 
      return true; }
       else return false; 
       // pasa el Homework, PERO NO PASA EN ESCRITORIO
    };
};
module.exports = todosIguales;
// paso EXPLICACION