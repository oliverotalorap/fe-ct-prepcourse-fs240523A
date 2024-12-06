function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  var i = 0;
  do { num = num + 5; i++; } 
  while (i < 8) return num;
  //while (i < 8) return num;
  // console.log(num); -No lo admite
}
 
module.exports = doWhile;
// paso Explicacion y como se imprime en panatalla