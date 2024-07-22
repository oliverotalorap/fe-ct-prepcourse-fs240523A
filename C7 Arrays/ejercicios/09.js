function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   
   let indiceAleatorio = Math.floor(Math.random() * array.length);
   let elementoAleatorio = array[indiceAleatorio];
   console.log(elementoAleatorio);    
   //chatGPT no funciono 
   //return math.random(array);
}

module.exports = obtenerElementoAleatorio;
// NO PASO