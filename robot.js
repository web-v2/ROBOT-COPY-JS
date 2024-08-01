const fs = require("fs/promises");
const path = require("path");
const { carpetas } = require("./listFacturas.js");
const { logError, logSuccess } = require("./helpers.js");

const destinoArchivo = "./destino";
const origenArchivo = `./origen/`;

async function radicar() {
  for (const file of carpetas) {    
    const pathArchivo = path.join(origenArchivo, `${file}.pdf`);
    const rutaDestinoArchivo = path.join(destinoArchivo, `${file}.pdf`);
    
    try {
      await fs.access(origenArchivo);
      await fs.copyFile(pathArchivo, rutaDestinoArchivo);
      await logSuccess(file);
      const Message = `Archivo ${file} copiado correctamente.\n`;
    } catch (err) {
      console.error(`Error al copiar el archivo en ${file}:`, err);
      await logError(file, err);
    }
  }
}

radicar();
