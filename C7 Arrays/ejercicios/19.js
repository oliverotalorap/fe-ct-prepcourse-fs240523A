function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar 
  //todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. 
  //Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  if(arguments.length === 0 ) return 0;
  var argMultiplicados = arguments[0]  // let i =1 ¿? en ves de 0.
  for(let i = 1; i < arguments.length; i++ ){
    argMultiplicados = argMultiplicados * arguments[i];
  };
   return argMultiplicados;
};
module.exports = multiplicarArgumentos;
