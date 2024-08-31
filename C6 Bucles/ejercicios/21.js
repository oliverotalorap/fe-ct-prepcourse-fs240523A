function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while -(mientres)
  // Tu código:

  while (numero > 1) {
    if (numero % 2 === 0) {
      numero = numero / 2;
  } else return false;
  }
  return true; // video 7/9 01.18.23

  // while (numero > 1) {
  //   if (numero % 2 != 0) return false;
  //   numero = numero / 2;
  // };
  // return true;

  // Potencia de 2; 32/2=16, 16/2=8, 8/2=4, 4/2=2, 2/2=1 
  // Potencia de 2; 25 no lo es

  // if (numero % 2 == 0) return true;  // NO PASARON 
  // else return false;
}

module.exports = esPotenciaDeDos;
// no paso. Se Explicacion