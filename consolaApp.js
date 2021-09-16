const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');
const yargs  = require('./config/yargs');
const colores = require('colors');



console.clear();

// console.log(process.argv);
// //Desestructuramos el array de process.argv para obtener el tercer dato (la base que le mandamos por argumentos), 
// //que por defecto será 5 en caso de que no nos manden base (evitamos undefined)
// const [ , , arg3 = '5'] = process.argv;
// console.log(arg3);


// //Como arg3 viene con la coletilla --base=, tenemos que eliminar esa parte para obtener la variable solo con el número
// const [ , base = 3 ] = arg3.split('=');
// console.log(base);


// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));

// console.log('=====================');
// console.log('FIN DEL ARCHIVO SIN YARGS');
// console.log('=====================');

//Esto tal que así puede traer problemas, si el usuario no pone '=' y pone algo como --base 5, el split no se realizará y por lo tanto fallará el programa
//O si pone como tercer argumento uno distinto del de base tipo: --limite=20 --base=5 (en este caso base es el cuarto argumento), no obtendremos el argumento 
//correcto para la creación del archivo tabla. Para eso tenemos el paquete yargs (instalar y hacer el require)

//console.log(process.argv);
//console.log(yargs);

//Probar a poner node .\consolaApp.js --limite=15 --base 5
//yargs no crear un array de strings como sí hace process.arg, crea un objeto, por lo que acceder a la base, independientemente de cómo se escriba en los argumentos
//es más fácil:

//console.log('Base en el objeto de yargs:', yargs.base);

//Si ponemos --base sin ningún valor asociado, automáticamente lo detectará como booleano y lo pondrá a true
//yargs crea automáticamente en el programa la opción 'node nombre_app --help', en este caso sería node consolaApp.js --help


//CONFIGURACIONES DE YARGS --> ver require


crearArchivo(yargs.base,  yargs.fin, yargs.listar)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));


