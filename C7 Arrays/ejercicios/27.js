function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

let texto = palabras.reduce(function(acum, palabras){
  return acum + " " + palabras
}
);
return texto; 
//return texto; 

//  return palabras.join(" ");  // (' '); // .join es una solucion

  let frase = []; // ""; ("");
  for (let i =0; i< palabras.length; i++ ){
     if(frase == []) {frase = palabras[i] }
     else {frase = frase + " " + palabras[i] }
  };
  return frase;
   // el Bucle FOR pasa en mi plantilla; PERO NO PASA EN EL WOMEWORK

};
module.exports = dePalabrasAFrase;
//paso analisar el for 