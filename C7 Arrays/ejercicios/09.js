function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   
   //return Math.random();  
   return array[Math.floor(Math.random() * array.length)];
   
   let indiceAleatorio = Math.floor(Math.random() * array.length);
   let elementoAleatorio = array[indiceAleatorio];
   return elementoAleatorio;    
};
let resultado = obtenerElementoAleatorio([4,3,2,1,0])
console.log(resultado)

module.exports = obtenerElementoAleatorio;
// paso EXPLICACION 