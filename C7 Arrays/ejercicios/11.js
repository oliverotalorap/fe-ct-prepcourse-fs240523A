function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

//return array * 2; // NO lo corre ?

  // const duplicarElementos = [];
  // for(let i = 0; i < array.length; i=i+1){
  // duplicarElementos.push(array[i] * 2 ) };
  // return duplicarElementos; 

  
  let nuevoArreglo = array.map( function(elemento) {
    return elemento * 2;
  });
  return nuevoArreglo;
};
//let porDos = duplicarElementos([1, 3, 5, 7, 2, 4, 6]);

//return array;

module.exports = duplicarElementos;
// paso EXPLICACION