function jugarCachipun() {
    const opciones = ['piedra', 'papel', 'tijera'];
    let puntajeUsuario = 0;
    let puntajeComputador = 0;

    // Función para obtener la opción del computador de forma aleatoria
    function obtenerOpcionComputador() {
        const indice = Math.floor(Math.random() * 3);
        return opciones[indice];
    }

    // Función para determinar el ganador
    function determinarGanador(opcionUsuario, opcionComputador) {
        if (opcionUsuario === opcionComputador) {
            return 'Empate';
        } else if (
            (opcionUsuario === 'tijera' && opcionComputador === 'papel') ||
            (opcionUsuario === 'papel' && opcionComputador === 'piedra') ||
            (opcionUsuario === 'piedra' && opcionComputador === 'tijera')
        ) {
            puntajeUsuario++;
            return 'Usuario';
        } else {
            puntajeComputador++;
            return 'Computador';
        }
    }

    // Solicitar al usuario las veces que desea jugar
    const vecesAJugar = parseInt(prompt('¿Cuántas veces deseas jugar?'));

    for (let i = 0; i < vecesAJugar; i++) {
        // Solicitar al usuario que indique su jugada
        const opcionUsuario = prompt('Elige piedra, papel o tijera:').toLowerCase();

        // Verificar si la opción ingresada es válida
        if (!opciones.includes(opcionUsuario)) {
            console.log('Ingresa una opción válida (piedra, papel o tijera).');
            i--; // Restar 1 al contador para repetir el turno
            continue;
        }

        const opcionComputador = obtenerOpcionComputador();
        console.log(`Computador eligió: ${opcionComputador}`);

        const ganador = determinarGanador(opcionUsuario, opcionComputador);
        console.log(`Resultado: ${ganador === 'Empate' ? 'Empate' : ganador === 'Usuario' ? '¡Felicidades, ganaste!' : 'Has perdido contra la máquina.'}`);
    }

    // Mostrar el resultado final con un alert
    if (puntajeUsuario > puntajeComputador) {
        alert('¡Felicidades, has ganado el juego!');
    } else if (puntajeComputador > puntajeUsuario) {
        alert('Lo siento, has perdido contra la máquina.');
    } else {
        alert('El juego ha terminado en empate.');
    }
}

// Llamar a la función para jugar
jugarCachipun();