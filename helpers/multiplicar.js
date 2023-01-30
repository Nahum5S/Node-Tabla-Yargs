const fs = require("fs");

const colors = require('colors');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  //Con el async ya damos por hecho que se va a regresar una promesa

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
          salida  += `${ base } x ${ i } = ${ base * i }\n`;
          consola += `${base} ${'*'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar) {
          console.log("========================================".green);
          console.log(`Tabla del: `.green,colors.blue(base));
          console.log("========================================".green);
          console.log(consola);
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
  }
};

module.exports = {
  crearArchivo,
};

