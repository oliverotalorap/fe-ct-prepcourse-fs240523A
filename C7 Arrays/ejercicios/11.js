function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

//return array * 2; // NO lo corre ?

let nuevoArreglo = array.map( function(elemento) {
  return elemento * 2;
});
return nuevoArreglo;

  // const duplicarElementos = [];
  // for(let i = 0; i < array.length; i=i+1){
  // duplicarElementos.push(array[i] * 2 ) };
  // return duplicarElementos; 

  
  return array.map(num => num * 2);
  var incremento = array.map(num => num * 2);
  return incremento; 
};
let porDos = duplicarElementos([1, 3, 5, 7, 2, 4, 6]);
console.log(porDos);
//console.log(array);   //NO CORRE
//return array;         //NO CORRE


module.exports = duplicarElementos;
// paso EXPLICACION