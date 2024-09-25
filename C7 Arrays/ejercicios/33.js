function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  const maxLength = Math.max(str1.length, str2.length, str3.length);  // Determinamos la longitud máxima
  let resultado = '';  // String donde combinaremos los caracteres
 
  for (let i = 0; i < maxLength; i++) { 
    if (i < str1.length) { resultado += str1[i];  // Agregamos el carácter de str1 si existe
    }
    if (i < str2.length) { resultado += str2[i];  // Agregamos el carácter de str2 si existe
    }
    if (i < str3.length) { resultado += str3[i];  // Agregamos el carácter de str3 si existe
    }
    return resultado;  // Retornamos el string combinado
 };
};

module.exports = combine;
// NO PASO 