function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  // toUpperCase conbierte a mayusculas
  // toLowerCase combierte a minusculas

  // const arrayEnMayusculas = array.map(function(elemento) {
  //   return elemento.toUpperCase();  // Convierte cada elemento a mayúsculas
  // });
  // return arrayEnMayusculas;

  // const nuevoArray = [];
  //     var nuevoArray = [];

  let nuevoArray = [];
  for(let i = 0; i < array.length; i++){
    nuevoArray.push(array[i].toUpperCase()) };
  return nuevoArray;
 
  for(let i = 0; i < array.length; i=i+1){
    if (array[i].toUpperCase()) return array[i];  };   // NO FUNCIONO
};

module.exports = convertirStringAMayusculas;
// paso