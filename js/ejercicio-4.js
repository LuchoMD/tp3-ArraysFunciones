/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
function parImpar(numero) {
  if (numero % 2 === 0) {
    return "El número " + numero + " es par.";
  } else {
    return "El número " + numero + " es impar.";
  }
}

let numeroIngresado = prompt("Ingresá un número entero:");

numeroIngresado = Number(numeroIngresado);

if (isNaN(numeroIngresado)) {
  alert("¡Por favor ingresa un número válido!");
} else {
  let resultado = parImpar(numeroIngresado);
  document.writeln(resultado);
}
