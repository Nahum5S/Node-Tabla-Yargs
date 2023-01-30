const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option("l", {
    alias: "Listar",
    type: "boolean",
    default: false,
    describe:'Muestra la tabla en consola'
  })
  .option("h", {
    alias: "Hasta",
    type: "number",
    default: 10,
    describe:'Marca un limite hasta donde se multiplica'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }

    return true;
  }).argv;


  module.exports = argv;