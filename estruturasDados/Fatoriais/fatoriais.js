//Abordagem de forma não recursiva, com loop
function fatorialDeNumber(number) {
  if (number < 0) return "Fatorial não é definido para números negativos";
  if (number === 0 || number === 1) return 1;

  let resultado = 1;

  for (let i = 2; i <= number; i++) {
    resultado *= i;
  }
  return resultado;
}

let numeroFatorial = 5;
let resultadoFatorial = fatorialDeNumber(numeroFatorial);
console.log(`O fatorial de ${numeroFatorial} é ${resultadoFatorial}`);

//Abordagem de forma recursiva
function fatorialRecursivo(numero) {
  if (numero < 0) {
    return "Fatorial não é definido para números negativos";
  } else if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return (numero *= fatorialRecursivo(numero - 1));
  }
}

let numeroFatorialRecursivo = 10;
let resultadoFatorialRecursivo = fatorialRecursivo(numeroFatorialRecursivo);
console.log(
  `O fatorial de ${numeroFatorialRecursivo} é ${resultadoFatorialRecursivo.toLocaleString(
    "en-US"
  )}`
);
