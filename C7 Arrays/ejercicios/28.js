function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:

  if (Array.isArray(arr) && arr.length > 0) {
  return true;  // Si es un arreglo y no está vacío, retornamos true
  } else {return false;  // Si no es un arreglo o está vacío, retornamos false
  };
    //Eje 28 de 33.
    //Eje 28 de 33.
};

module.exports = esArrayNoVacio;

// paso