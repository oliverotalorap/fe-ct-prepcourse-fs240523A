function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  // Normalizamos el string: convertimos a minúsculas y eliminamos caracteres no alfanuméricos
  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');     
  const stringInvertido = string.split('').reverse().join(''); // Invertimos el string
  console.log(string) === stringInvertido;                     // Comparamos string original con el invertido
  return string === stringInvertido;
  return string === stringInvertido; // para guardar

if(string.split("").reverse().join("") === string) 
    return true;
  else return false; // Ejercicio Camilo Pineda
// Ejercicio Camilo Pineda -(SALE EN homework pero no sale en ESCRITORIO


return string.split("").reverse().join(""); // por Camilo Pineda
//HACE FALTA IGUALARLO Y DEBOLVEERLO NO PASA

};
module.exports = esPalindromo;
// analisar la estructira de la funcion,
