function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

// if(string.split("").reverse().join("") === string) 
//     return true;
//   else return false; // Ejercicio Camilo Pineda
// // Ejercicio Camilo Pineda -(SALE EN ESCITORIO pero pasa el HomeWork

//return string.split("").reverse().join(""); // por Camilo Pineda
//HACE FALTA IGUALARLO Y DEBOLVEERLO NO PASA


  // Normalizamos el string: convertimos a minúsculas y eliminamos caracteres no alfanuméricos
  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');     
  const stringInvertido = string.split('').reverse().join(''); // Invertimos el string
  console.log(string) === stringInvertido;                     // Comparamos string original con el invertido
  return string === stringInvertido;

};
module.exports = esPalindromo;
// analisar la estructira de la funcion,
