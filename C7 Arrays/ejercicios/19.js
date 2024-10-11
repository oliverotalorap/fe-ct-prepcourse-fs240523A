function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar 
  //todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. 
  //Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  //console.log(arguments);

  // if(arguments.length === 0 ) return 0;
  // if(arguments.length === 1 ) return arguments[0];
  // let  multiplicacion = 1; 
  // for(let i = 0; i < arguments.length; i++ ){
  //   multiplicacion = multiplicacion * arguments[i];
  // };
  //  return multiplicacion;

  if(arguments.length === 0 ) return 0;
  var argMultiplicados = arguments[0]  // let i =1 ¿? en ves de 0.
  for(let i = 1; i < arguments.length; i++ ){
    argMultiplicados = argMultiplicados * arguments[i];
  };
   return argMultiplicados;


};

multiplicarArgumentos([2,3,4,5,6,7]);
// Es un OBJETO; NoEsArreglo;
module.exports = multiplicarArgumentos;
