function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

      let acum = 1;
        for (let i = a; i <= b; i++) {
          acum = acum * i;          
        }
        return Math.abs(acum);
        //if(acum === -0 ) return 0; // NO FUNCION 

      // let acumulador = 1;
      //   for (let i = a; i <= b; i++) {
      //       acumulador *= i;
      //   }
      //   return acumulador === 0 ? 0: acumulador;

  // (5, 10)
  // 5x6=30, 30x7=210, 210x8=1680, 1680x9=15120, 15.120x10=151.200
  // for (let i = a; i <= b; i++)
  // Acumulador = i* i+1;
  // viveo 7/9 https://youtu.be/nes1Vi-yDvI?list=PL-6w-c2LFJ3Bm6unSrIfpfmPAzcB7zkzD&t=3768
}

module.exports = productoEntreNúmeros;
// paso nesesito Explicacion