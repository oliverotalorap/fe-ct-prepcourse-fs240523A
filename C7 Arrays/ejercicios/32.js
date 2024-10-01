function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  // // Normalizamos el string: convertimos a minúsculas y eliminamos caracteres no alfanuméricos
  // string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  //   // Invertimos el string
  // const stringInvertido = string.split('').reverse().join('');
  //   // Comparamos el string original con el invertido
  // return string === stringInvertido;
  
  if(string.split("").reverse().join("") === string) 
    return true;
  else return false; // Ejercicio Camilo Pineda

};
module.exports = esPalindromo;
// analisar la estructira de la funcion,
// paso
