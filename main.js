// Algoritmo:

//  Necesidad => Crear juego donde hay que adivinar un número aleatorio entre 1 y 100.    
//  Datos de entrada => Número del usuario.
//  Datos de salida => Mensaje de ayuda para el usuario sabes si el número es mayor o menor al puesto anteriormente.
//  Formulas => bucle while, condicional if/else if





// Pseudocódigo:
    // Algoritmo AdivinarNumeroAleatorio
        // Generar numeroAleatorio ;
        // Leer numeroAleatorio
        // Generar numeroUsuario y Enviar mensaje al usuario sobre el juego ;

        // mientras (numeroAleatorio != numeroUsuario) {
            // numeroUsuario = mensaje "Coloca un número" ;
            // numeroUsuario = string to Number;

            // si(numeroUsuario > numeroAleatorio) {
                // Enviar mensaje "Tu número es muy bajo" ;
            // } deLoContrario si (numeroUsuario < numeroAleatorio) {
                // Enviar mensaje "Tu número es muy alto" ;
            // } sino {
                // Enviar mensaje "Tu número es el correcto" ;
            // }
        // }
    // FinAlgoritmo
    
    
    
    
    
    // Código
// Número generado + Número del usuario
let randomNumber = Math.round(Math.random() * (100 - 1) + 1);
let userNumber = alert("Adivina el número aleatorio");

// Bucle indefinido hasta que el usuario adivine el número generado
while(randomNumber != userNumber) {
    userNumber = prompt("Coloca un número");
    userNumber = Number(userNumber);

    if (userNumber > randomNumber) {
        alert("Tu número es muy alto");
    } else if (userNumber < randomNumber) {
        alert("Tu número es muy bajo");
    } else {
        alert("Tu número es el correcto");
    }
}
