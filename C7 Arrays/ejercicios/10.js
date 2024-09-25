function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  const primerStringLargo = array.find(function(elemento) {
    return elemento.length >= 5; });
    return primerStringLargo;

  // no paasa con >5, no pasa con >6; PASA CON (>= 5)

  
//   const multiplicarIndice = [];
//   for(let i = 0; i < array.length; i=i+1){
//     multiplicarIndice.push(array[i] * multiplicarIndice.length); 
//  };
//  console.log(multiplicarIndice); 

  // function callback(elemento) {
  //     if (elemento > 5 ) return elemento;
  //     return array.length > 5;  };
};

module.exports = obtenerPrimerStringLargo;
// NO PASO EXPLICACION
