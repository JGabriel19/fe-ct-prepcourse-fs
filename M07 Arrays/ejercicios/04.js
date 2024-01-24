function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  let numeroAleatorio = Math.floor(Math.random() * array.length);
  return array[numeroAleatorio];
}

module.exports = obtenerElementoAleatorio;
