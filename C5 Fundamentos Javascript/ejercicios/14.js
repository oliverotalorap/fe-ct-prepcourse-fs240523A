function mayorQueCincuenta(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:

  return num > 50;
  
  if(num > 50) {
    return true; 
  }
  else return false;
}

// paso
module.exports = mayorQueCincuenta;
