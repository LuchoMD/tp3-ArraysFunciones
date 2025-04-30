/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/
// Funcion
function cadena(texto) {
  if (texto === texto.toUpperCase()) {
    return "¡La cadena está formada solo por MAYÚSCULAS!";
  } else if (texto === texto.toLowerCase()) {
    return "¡La cadena está formada solo por minúsculas!";
  } else {
    return "¡La cadena es una mezcla de mayúsculas y minúsculas!";
  }
}

let entrada = prompt("Ingresá una cadena de texto:");

if (entrada === null) {
  alert("No ingresaste una cadena válida.");
} else {
  let resultado = cadena(entrada);
  document.writeln(resultado);
}
