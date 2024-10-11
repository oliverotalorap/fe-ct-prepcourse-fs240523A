function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  // if (numeros.length === 0) return null; 
  // for (let i = 0; i < numeros.length -1; i++) {
  //   if (numeros[i] + 1 !== numeros[i + 1] ) return numeros[i] + 1;
  // };
  // return null; //Ejemplos Camilo Pineda 


  //if (numeros.length === 0) { return null; }; // Si está vacío, devolvemos null
  if (numeros.length === 0) return null; // Si está vacío, devolvemos null
    for (let i = 0; i < numeros.length -1; i++) {
    if (numeros[i + 1] - numeros[i] > 1) {return numeros[i] + 1;  
      // Retornamos el número faltante
  }; };
  return null;  // Si no encontramos un número faltante, devolvemos null

};

module.exports = encontrarNumeroFaltante;
// paso