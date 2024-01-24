function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let invertir = [];
  for (let i = array.length - 1; i >= 0; i--) {
    invertir.push(array[i]);
  }
  return invertir;
}
console.log(invertirArray([1, 2, 3, 4]));
module.exports = invertirArray;
