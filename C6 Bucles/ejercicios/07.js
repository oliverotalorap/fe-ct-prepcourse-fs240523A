function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:

  // if (a % 2 == 0 && a % 3 == 0) {return true; }
  // else return false; 
  
  return a %2 == 0 && a %3 == 0; // master

  console.log(a %2 == 0 && a %3 == 0); // lo toma SOLO con return
  
}
module.exports = esParYDivisiblePorTres;
// paso
esParYDivisiblePorTres(12);