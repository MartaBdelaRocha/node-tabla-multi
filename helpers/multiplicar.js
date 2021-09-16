const fs = require('fs');
const colores = require('colors');


const crearArchivo = (base = 5, fin = 10, listar) => {

    return new Promise((resolve, reject) => {

        
       let salida = '';

        for (let i = 1; i <= fin; i++) {

            salida += `${colores.yellow(base)} ${'x'.blue} ${i} ${'='.blue} ${base * i}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);

        if (listar){
            
            console.log('==============='.green);
            console.log('  Tabla del'.green,colores.blue(base) );
            console.log('==============='.green);
            console.log(salida);
        }
        else{
            console.log('Pediste no listar');
        }
        
    })
}

module.exports = {
    crearArchivo: crearArchivo
}


//VERSIÓN CON ASYNC AWAIT

// const crearArchivo = async (base = 5) => {

//     try {

//         console.clear();
//         console.log('===============');
//         console.log('  Tabla del', base);
//         console.log('===============');

//         let salida = '';

//         for (let i = 1; i <= 10; i++) {

//             salida += `${base} x ${i} = ${base * i}\n`;
//         }

//         fs.writeFileSync(`tabla-${base}.txt`, salida);

//         return `tabla-${base}.txt`;
//     }
//     catch (err) {
//         throw err;
//     }

// }

// module.exports = {
//     crearArchivo: crearArchivo
// }

//Si necesitamos exportar algo, con node se porta de esa manera: module.exports porque sino este archivo sería privado