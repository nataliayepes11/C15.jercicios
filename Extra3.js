/* Simulador de una cola de atención al cliente
Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. 
Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. Realiza lo siguiente:
1.	Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
2.	Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
3.	Al final, muestra cuántos clientes fueron atendidos en total.
Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].
*/

let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let contador = 0
console.log("Lista de clientes:", clientes);                     // Para que quede más prolijo.

while (clientes.length > 0) {
let cliente1 = clientes.shift();
console.log("Atendiendo a:", cliente1);
if (cliente1 === "VIP") {
    console.log("Atención, el cliente " + cliente1 + " tiene prioridad!");
}
contador ++;
}
console.log("Total de clientes atendidos:", contador);
