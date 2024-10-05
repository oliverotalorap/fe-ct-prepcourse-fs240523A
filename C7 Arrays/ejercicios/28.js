function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:

  if (Array.isArray(arr) && arr.length > 0) {
  return true;  // Si es un arreglo y no está vacío, retornamos true
  } else {return false;  
  //} else {return false;  // Si no es un arreglo o está vacío, retornamos false
  };

};

module.exports = esArrayNoVacio;

// paso