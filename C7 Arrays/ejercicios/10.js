function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

//   const primerStringLargo = array.find(function(elemento) {
//     return elemento.length >= 5; });
//     return primerStringLargo;

//   // no paasa con >5, no pasa con >6; PASA CON (>= 5)

//   for(let i = 0; i < array.length; i=i+1){
//    if (array[i].length >= 5) return array[i]; 
//  };


let arregloDeCinco = array.filter( function(string) {
  if (string.length >= 5) return string; 
} );
return arregloDeCinco[0];
console.log(arregloDeCinco);

};
let resultado = obtenerPrimerStringLargo(["di", "dar", "dedo", "dedos", "dedito"]);
console.log(resultado);


module.exports = obtenerPrimerStringLargo;
// paso EXPLICACION
