function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el 
   //que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   
   return array.indexOf(num);
   
   indice = array.indexOf(num);
   return indice;
};
module.exports = encontrarElemento;
