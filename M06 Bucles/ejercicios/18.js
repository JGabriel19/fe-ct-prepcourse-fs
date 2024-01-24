function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let result = 1;
  for (let i = a; i <= b; i++) {
    result *= i;
  }
  if (result === -0) {
    result = 0;
  }
  return result;
}
console.log(productoEntreNúmeros(-5,5));

module.exports = productoEntreNúmeros;