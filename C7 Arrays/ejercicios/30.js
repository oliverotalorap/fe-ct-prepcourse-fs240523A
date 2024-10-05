function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  console.log(numeros);

 for (let i = 0; i< numeros.length; i=i+1) {
  for (let j = i+1; j< numeros.length; j++) {
    if (numeros[i] === numeros[j]) return numeros[i];    
 }; };

  const numerosVistos = new Set();        // Creamos un Set para almacenar números vistos
  for (let i = 0; i < numeros.length; i++) {
    if (numerosVistos.has(numeros[i])) {
      return numeros[i]; }                // Si ya hemos visto el número, lo retornamos
    else {numerosVistos.add(numeros[i]); } // Si no lo hemos visto, lo agregamos al Set
  };
    //return null;                      // return null; - Boqueaba el HOMEWORK
    // Repasar el Ejercicio NO LO COMPRENDO.
    
  };


  module.exports = encontrarElementoRepetido;
  console.log(encontrarElementoRepetido([1, 11, 2, 4, 5, 6, 7, 4, 11, 2, 5, 13]));
  //let repetido = encontrarElementoRepetido([1, 3, 2, 4, 5, 6, 7, 3, 11, 2, 5, 13])
  //console.log(repetido);
  
  // Prueva de escritorio.

  //encontrarElementoRepetido([1, 3, 2, 4, 5, 6, 7, 3, 11, 2, 5, 13]); //NO FUNCIONO
  //console.log(numeros);         NO FUNCIONO
  //console.log(numerosVistos);   NO FUNCIONO