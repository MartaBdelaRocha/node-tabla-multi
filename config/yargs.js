const yargs = require('yargs')
    .option('b', {      //Poniendo b y alias base nos servirá para mandarle la base poniendo --base o -b
        alias: 'base',
        type: 'number',
        demandOption: true,   //Esto es para obligar a poner una base con un valor, que por mucho que pongamos type number, aceptaba poner por ejemplo abc
        // y tratará de transformar el abc en un número, el resultado será NaN. Para obligar al chequeo de tipos usamos check
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('f', {
        alias: 'fin',
        type: 'number',
        default: 10,
        describe: 'Número hasta el que se crea la tabla.' //Describe se mostrará cuando pongamos --help al listar todos los comandos disponibles en nuestra app (poner node consolaApp -- help)
    }
    )
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola' //Describe se mostrará cuando pongamos --help al listar todos los comandos disponibles en nuestra app (poner node consolaApp -- help)
    }
    )

    .check((yargs, options) => {
        if (isNaN(yargs.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

    module.exports = yargs;
    