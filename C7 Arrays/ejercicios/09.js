function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   
   return array[Math.floor(Math.random() * array.length)];
   
   let indiceAleatorio = Math.floor(Math.random() * array.length);
   let elementoAleatorio = array[indiceAleatorio];
   return elementoAleatorio;    
};
module.exports = obtenerElementoAleatorio;
// paso EXPLICACION