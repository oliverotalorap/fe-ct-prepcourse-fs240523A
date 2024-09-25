function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:


  const arrayEnMayusculas = array.map(function(elemento) {
    return elemento.toUpperCase();  // Convierte cada elemento a mayúsculas
  });
  return arrayEnMayusculas;

  // const pasarAMayusculas = [];
  // for(let i = 0; i < array.length; i++){
  // pasarAMayusculas.tuUpperCase(array[i] )
  // };
  // return pasarAMayusculas; // NO PASO, PASO SOLO UN ITEN
}

module.exports = convertirStringAMayusculas;
// paso