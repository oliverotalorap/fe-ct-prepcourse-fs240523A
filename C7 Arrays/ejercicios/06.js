function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  return array.reverse(); 
  // array.reverse();
  // return array;

  // let arrayTemporal =[]
  // for (let i = 0; i <array.length; i=i+1) {
  //    arrayTemporal.unshift(array[i])       };
  // return arrayTemporal;

    let arrayTemporal =[]
  for (let i = array.length -1; i>= 0; i--) {
    arrayTemporal.push(array[i])
  }
  return arrayTemporal;
};

let resultado = invertirArray([1,2,3,4,])
console.log(resultado);
// Prueva de escritorio.

module.exports = invertirArray;
