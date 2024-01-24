function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let resultado = 1;
  let exponente = 0;
  while (exponente<numero) {
    resultado *=2;
    // resultado=Math.pow(2, exponente);
    exponente++;
    if (resultado === numero){
    return true;
  }
  }
  return false;
}
console.log(esPotenciaDeDos(2));
module.exports = esPotenciaDeDos;
