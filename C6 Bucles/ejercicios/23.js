function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  //if(numero < 2) return false;
  for (var i = 2; i < numero; i++) {
  if (numero % i === 0) return false;
}
return true;
//PASA EN ESCRITORIO PERO NO PASA EN LA TERMINAL

// if (numero % 2 === 0) false;
// else if (numero % 3 === 0) false;
// else if (numero % 5 === 0) false;
// else if (numero % 7 === 0) false;
// else return true;
//NO PASA EN LA TERMINAL PERO PASA EN EL ESCRITORIO:

// switch (numero) {
//           case numero % 2 == 0: return false; 
//           case numero % 3 == 0: return false; 
//           case numero % 5 == 0: return false; 
//           case numero % 7 == 0: return false; 
// default: return true; }
// NO FUNCIONO
};

module.exports = esNumeroPrimo;
// paso neseesito explicacion 