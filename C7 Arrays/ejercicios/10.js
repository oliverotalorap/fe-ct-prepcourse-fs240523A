function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  
  return (array.find(array => array.length > 5)); 
  return (array.find(elemento => elemento.length > 5)); 
  //let array = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho"];
  //console.log(obtenerPrimerStringLargo); // "cuatro"
}

module.exports = obtenerPrimerStringLargo;
// no paso -pasa solo 1 requerimiento