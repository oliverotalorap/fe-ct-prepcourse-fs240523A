function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  // let arregloDeCinco = array.filter( function(string) {
  //   if (string.length >= 5) return string; 
  // } );
  // return arregloDeCinco[0];
  // console.log(arregloDeCinco);
  

  // const primerStringLargo = array.find(function(elemento) {
  //   return elemento.length >= 5; }); // no paasa con >5; PASA CON (>= 5)
  //   return primerStringLargo;


  for(let i = 0; i < array.length; i=i+1){
   if (array[i].length >= 5) return array[i];  };

//  array[0];
//       for (let i =0; i < array.length; i=i+1) 
//       if (array[i].length >= 5) { array.push(array[i].length > 5) 
//          return array[i]; 
//     };


};
let resultado = obtenerPrimerStringLargo(["di", "dar", "dedo", "dedos", "dedito"]);
console.log(resultado);


module.exports = obtenerPrimerStringLargo;
// paso EXPLICACION
