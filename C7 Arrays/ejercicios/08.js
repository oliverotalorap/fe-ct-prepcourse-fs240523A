function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el 
   //que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   
   // return array.indexOf(num);
   
   // indice = array.indexOf(num);
   // return indice;
   
   for (let i = 0; i< array.length; i++) {
      if (array[i] === num) return i
   };
     return -1    
         
   //for (let index = 0; index < array.length; index++) {

};

module.exports = encontrarElemento;
