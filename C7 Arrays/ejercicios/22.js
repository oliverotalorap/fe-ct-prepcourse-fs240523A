function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la 
  //tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

//const resultado = [];
//let resultado = [];
var resultado = [];
   for(let i = 0; i <= 10; i++){
      resultado.push(i*6);
   }; 
   return resultado;
   //return resultado;
};

module.exports = tablaDelSeis;
