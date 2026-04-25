//"use strict" // Modo estricto

/*-----------------------*/
/* Practicas con Objetos */
/*-----------------------*/

//Crear objeto

const objeto = {
    nombre : "El buena gente",
    valor : 234,
    vigente : true,
    porcentaje : 23.6
}

//Agregar un nuevo valor
objeto.nuevoValor = "La Cebolla"

//Eliminar valor
delete objeto.vigente

// Destructuring a objetos
// El objetivo es sacar una propiedad del objeto y convertirla en una variable
const {nombre} = objeto

/* --------------------------------- */
/* Evitar la modificacion de objetos */
/* ----------------------------------*/

const producto = {
    Nombre : "ASUS TUF GAMING F15",
    MemoryRAM : 40,
    Processor : "Intel Core I5 10300H",
    StorageInGB : 1376
}

//Evita modificar, agregar y eliminar elementos
Object.freeze(producto)

producto.unNuevoValor = 1234 // No se pueden agregar
producto.nombre = "Asus Tuf Gaming F15" // No se pueden modificar valores
delete producto.Processor //No puedo borrar valores


//Evita Agregar y eliminar valores
//Permite modificar valores existentes
Object.seal(producto)

producto.StorageInGB = 4098 // El valor sera modificado
