function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  // array.reverse();
  // return array;

  let arrayTemporal =[]
  for (let i = 0; i <array.length; i=i+1) {
    arrayTemporal.unshift(array[i])
  }
  return arrayTemporal;
};

module.exports = invertirArray;
