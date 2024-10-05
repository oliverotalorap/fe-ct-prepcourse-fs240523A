function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el 
   //que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   
   //for (let i = 0; i< array.length; i++) {
   //   if (array[i] === num) return i
   //};
   //  return -1    
         
   return array.indexOf(num);
   
   // indice = array.indexOf(num);
   // return indice;
   
   //for (let index = 0; index < array.length; index++) {

};

module.exports = encontrarElemento;
