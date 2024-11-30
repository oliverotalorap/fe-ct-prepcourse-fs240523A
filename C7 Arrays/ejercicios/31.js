function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  const caracteres = texto.split('');  // Convertimos el texto en un arreglo de caracteres
  const caracteresInvertidos = caracteres.reverse();  // Invertimos el arreglo de caracteres
  const textoInvertido = caracteresInvertidos.join('');  // Unimos los caracteres invertidos en un string
  return textoInvertido;  // Retornamos el string invertido
  //return textoInvertido;

  return texto.split("").reverse().join(""); // por Camilo Pineda


  var palabraSeparada = texto.split("");            //console.log(palabraSeparada);
  var palabraInvertida = palabraSeparada.reverse(); //console.log(palabraInvertida);
  var palabraUnida = palabraInvertida.join("") 
  return palabraUnida;


};
console.log(invertirTexto("hola mundo en brisbane"));
module.exports = invertirTexto;
// paso