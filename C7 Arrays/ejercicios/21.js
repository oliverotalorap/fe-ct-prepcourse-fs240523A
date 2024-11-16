function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. 
  // Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y 
  // retornarlo.
  // Si alguno de los meses no está, retornar el string: 
  //"No se encontraron los meses pedidos".
  // Tu código:

   let mesesFiltrados = array.filter( function (mes) {
      if ( mes === "Enero" || mes === "Marzo" || mes === "Noviembre"){
         return mes; };
   })
   if( mesesFiltrados.length === 3) return mesesFiltrados;
   else return "No se encontraron los meses pedidos";


  var arrayMesesA = [];
  for(var i =0; i < array.length; i++){
     if(array[i] === "Enero"){arrayMesesA.push(array[i]) }
     if(array[i] === "Marzo"){arrayMesesA.push(array[i]) }  
     if(array[i] === "Noviembre"){arrayMesesA.push(array[i]) };     
  };
  if (arrayMesesA.length === 3) {return arrayMesesA; } 
     return "No se encontraron los meses pedidos";
};

module.exports = mesesDelAño;
// NO PASO EXPLICACION