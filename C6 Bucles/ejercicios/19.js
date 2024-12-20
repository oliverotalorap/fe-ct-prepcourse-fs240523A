function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  let suma = 0;
  for (let i = 1; i <= n; i=i+1) {
    suma = suma + i;
  }
  return suma;   
  //
}

module.exports = sumarHastaN;
// paso nesesito Explicacion