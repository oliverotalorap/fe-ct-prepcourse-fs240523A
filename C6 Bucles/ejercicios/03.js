function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

 //return Math.max(x,y); //master

if (x == y) return x;
  else if (x > y ) {return x; }
  else return y;

}
module.exports = obtenerMayor;
// paso