const prompt = require('prompt-sync')({ sigint: true });

class JuegoDeAdivinanza {
    constructor(palabraSecreta) {
        this.palabraSecreta = palabraSecreta;
        this.intentos = 5;
        this.pista = '';
    }

    establecerPista(pista) {
        this.pista = pista;
    }

    jugar() {
        console.log('¡Bienvenido al Juego de Adivinanzas!');
        console.log(`Tienes ${this.intentos} intentos para adivinar la palabra.`);
        console.log(`Pista: ${this.pista}`);

        while (this.intentos > 0) {
            let adivinanza = prompt('Introduce tu adivinanza (escribe "salir" para terminar el juego): ');
            if (adivinanza === "salir") {
                console.log('Has salido del juego.');
                return;
            }
            if (adivinanza === this.palabraSecreta) {
                console.log('¡Felicidades! Adivinaste la palabra.');
                return;
            } else {
                this.intentos--;
                console.log(`Incorrecto. Te quedan ${this.intentos} intentos.`);
            }
        }
        console.log(`Juego terminado. La palabra era: ${this.palabraSecreta}`);
    }
}

const juego = new JuegoDeAdivinanza('javascript');
juego.establecerPista('Es un lenguaje de programación ampliamente utilizado.');
juego.jugar();