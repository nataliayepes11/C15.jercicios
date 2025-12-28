/* Clasificación de palabras según su longitud
Tienes una lista de palabras en una oración. Debes:
1.	Dividir la oración en palabras individuales.
2.	Clasificar las palabras en dos categorías:
▪	Cortas (menos de 5 letras)
▪	Largas (5 letras o más)
3.	Mostrar ambas listas de palabras clasificadas.
4.	La oración es: "JavaScript es un lenguaje poderoso y versátil".
*/

let oracion = ("JavaScript es un lenguaje poderoso y versátil");
let palabrasIndividuales = oracion.split(" ");
console.log("1) ", palabrasIndividuales);
//2)
let palabrasCortas = [];
let palabrasLargas = [];

for (let i = 0; i < palabrasIndividuales.length; i++) {
    if (palabrasIndividuales[i].length < 5) {
        palabrasCortas.push(palabrasIndividuales[i]);
    } else {
        palabrasLargas.push(palabrasIndividuales[i]);
    }
} 
console.log("3) Palabras cortas:", palabrasCortas);
console.log("3) Palabras largas:", palabrasLargas);



