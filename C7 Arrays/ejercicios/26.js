function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:

let multiplo = undefined;
  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] % n === 0) {
      multiplo = secuencia[i]
      break; } 
    };
return multiplo; //Ejemplos Camilo Pineda 30 -/ 76 de 79?
//return multiplo; //Ejemplos Camilo Pineda 30 -/ 76 de 79?


  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] % n === 0) {
       return secuencia[i];  // Devolvemos el primer múltiplo encontrado
       break;  // Detenemos el bucle (opcional después del return)
      };
   };
 return null;
 return null;
};

module.exports = encontrarPrimerMultiploDeN;
// NO PASO en el HomeWork, pero si paso en mis Ensayos