/* Ejercicio 6: Buscar la última posición de un elemento repetido
Tienes una lista de números [2, 5, 7, 2, 8, 7]. 
Encuentra y muestra la última posición en la que aparece el número 7.
*/

let numeros = [2, 5, 7, 2, 8, 7];
let ultimoSiete = numeros.lastIndexOf(7);
console.log("La última posición en la que aparece el número 7 es:", (ultimoSiete + 1)); // Le sumo 1 para que cualquier mortal 
// lea posición, aunque nosotras sabemos que es el indice 5 del array)

