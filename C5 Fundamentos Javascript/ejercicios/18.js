function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:

  // if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
  //   return "Es vocal";
  //   }
  //   else return "Dato incorrecto";

    if (letra == "a") return "Es vocal"
    if (letra == "e") return "Es vocal"
    if (letra == "i") return "Es vocal"
    if (letra == "o") return "Es vocal"
    if (letra == "u") return "Es vocal"
    else return "Dato incorrecto"
}

// paso
module.exports = esVocal;