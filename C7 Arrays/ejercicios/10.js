function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  var nuevo =[]
  for (var i = 0; i < array.length; i++)
  if(array[i] > 5){
     nuevo.push(array > 5)
  //   nuevo.push(array[i] > 5)
};
return nuevo;
  return (array.find(array => array.length > 5)); 
  return (obtenerPrimerStringLargo = array.length >5 );
  return (obtenerPrimerStringLargo (array => array.length > 5)); 
}

module.exports = obtenerPrimerStringLargo;
// 01 - 09 pasan; NO PASA 10