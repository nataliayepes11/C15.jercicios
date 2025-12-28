/* Gestión de inventario de una tienda
Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
Debes realizar las siguientes acciones:
1.	Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
2.	Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
3.	Eliminar el primer producto del inventario.
4.	Mostrar la lista actualizada de productos en una sola cadena, separados por comas.
*/

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
console.log("Inventario inicial:", inventario);                  // Para que quede más bonito en la terminal
inventario.push("Impresora");
console.log("Inventario actualizado:", inventario);              // Para que quede más bonito en la terminal
let hayTablet = inventario.includes("Tablet");
if (hayTablet) {                                                 // Para que quede más bonito en la terminal
    console.log("Si, tenemos en el inventario TABLET");
} else {
    console.log("No tenemos en el inventario TABLET");
}
let primerProducto = inventario.shift();
console.log("Inventario modificado:", inventario);               // Para que quede más bonito en la terminal
let inventarioFinal = inventario.join(`, `);
console.log("Inventario final:" , inventarioFinal);