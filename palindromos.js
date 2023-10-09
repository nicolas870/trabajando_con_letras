const palabra = prompt("Ingrese una palabra: ");
const palabra_sin_espacios = palabra.toLowerCase().replace(/\s/g, "");
const palabra_invertida = palabra_sin_espacios.split("").reverse().join("");
if (palabra_sin_espacios === palabra_invertida) {
  console.log("La palabra es un palíndromo.");
} else {
  console.log("La palabra no es un palíndromo.");
}
