function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let iteracion = 1;
  do {
    //console.log(iteracion);
    iteracion++;
    num += 5;
    //console.log(num);
    //console.log(iteracion);
  } while (iteracion <= 8);
  return num;
}
console.log(doWhile(100));
module.exports = doWhile;
