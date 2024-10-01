function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

for (let i = 0; i < numeros.length; i++) {
  for (let j = i+1; j <numeros.length; j++) {
    if (numeros[i] === numeros[j]) return numeros[i];    
} };

  // const numerosVistos = new Set();  // Creamos un Set para almacenar números vistos

  // for (let i = 0; i < numeros.length; i++) {
  //   if (numerosVistos.has(numeros[i])) {
  //     return numeros[i]; } // Si ya hemos visto el número, lo retornamos
  //   else {numerosVistos.add(numeros[i]);  // Si no lo hemos visto, lo agregamos al Set
  // } };
  // return null;  // Si no encontramos números repetidos, retornamos null

};
module.exports = encontrarElementoRepetido;
// NO PASO en el HomeWork, pero so paso en mi block de Ejercicios.