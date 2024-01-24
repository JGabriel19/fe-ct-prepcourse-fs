function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let invertir = "";
  // repasar .replace
  const cadena = string.toLowerCase().replace(/\s/g, "");
  for (let i = cadena.length - 1; i >= 0; i--) {
    invertir += cadena[i];
  }

  if (invertir == cadena) {
    return true;
  } else {
    return false;
  }
  // return invertir;
}
console.log(esPalindromo("reconocer"));
module.exports = esPalindromo;
