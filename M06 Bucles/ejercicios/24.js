function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let element = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    element += texto[i];
  }
  return element;
}
console.log(invertirTexto("Gabriel"));
module.exports = invertirTexto;
