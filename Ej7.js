/* Ejercicio 7: Verificar si una lista contiene un elemento
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. 
Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no.
*/

let comidas = ["Pizza", "Hamburguesa", "Tacos"];
let tieneSushi = comidas.includes("Sushi");       // Si me piediera true o false, lo terminaría acá mostrando solo esta respuesta.
if (tieneSushi) {                                 // Entiendo que el ejercición pide que confirme SI ESTÁ,
    console.log("Siii SUSHI está en la lista!!");
} else {                                          // O si NO ESTÁ, por eso agregué los condicionales.
    console.log("No, SUSHI no está en la lista.");
}

