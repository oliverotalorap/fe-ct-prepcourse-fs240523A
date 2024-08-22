function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

      let producto = 1;
        for (let i = a; i <= b; i++) {
          producto *= i;
          
        }
        return producto === 0 ? 0: producto;

  // var suma = 0;
  // for (var i = 0 ; i < b; i++ ) {
  //   suma = suma + 1;
  // }
  // return suma;
}

module.exports = productoEntreNúmeros;
// paso nesesito Explicacion