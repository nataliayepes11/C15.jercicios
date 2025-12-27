/* Ejercicio 3: Agregar y eliminar a la fila de mascotas
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"]. 
Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista. 
Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada.
*/

let listaDeMascotas = ["Perro", "Gato", "Conejo"];
console.log("Lista de mascotas:", listaDeMascotas); //Agregado por prolijidad
listaDeMascotas.unshift("Hámster");
console.log("Lista de mascotas:", listaDeMascotas);
let primeraMascota = listaDeMascotas.shift();
console.log("Es el turno de:", primeraMascota);
console.log("Lista de mascotas actualizada:", listaDeMascotas);

