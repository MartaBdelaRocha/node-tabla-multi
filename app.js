const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar')

const base = 5;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


//TRASLADO DE TODO EL SIGUIENTE cÓDIGO AL ARCHIVO multiplicar.js    

// let salida = '';

// for(let i = 1; i<=10; i++){

//     salida +=`${base} x ${i} = ${base*i}\n`;
// }

// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if(err) throw err;
//     console.log(salida);
//     console.log('Tabla del ${base} creada correctamente');
// });

//fs.writeFileSync(`tabla-${base}.txt`, salida);  //El error con writeFileSync se capturaría mediante un try catch

//CREANDO ACCESO AL FILE SYSTEM DESDE NODE: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
//Entendiendo FILE SYSTEM como el conjunto de directorios y archivos del servidor donde esté corriendo NODE
