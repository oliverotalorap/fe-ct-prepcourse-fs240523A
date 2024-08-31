function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var tresMeses = [];
  for(let i = 0; i < array.length; i=i+1) {
    if (array[i] == "Enero" ) tresMeses.push(array[i])
    if (array[i] == "Marzo" ) tresMeses.push(array[i])
    if (array[i] == "Noviembre" ) tresMeses.push(array[i])
  }
return tresMeses;
}

module.exports = mesesDelAño;
// NO PASO EXPLICACION