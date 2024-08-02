function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   
   //let indiceAleatorio = Math.floor(Math.random() * array.length);
   let indiceAleatorio = Math.floor(Math.random() * (array.length));
   let elementoAleatorio = array[indiceAleatorio];
   return elementoAleatorio;    

   //chatGPT no funciono 
   //return math.random(array);
}

module.exports = obtenerElementoAleatorio;
// PASO Explicacion