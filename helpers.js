const fs = require("fs/promises");
const logFileError = "./errores.log";
const logFileSuccess = "./exitosos.log";

async function logError(carpeta, err) {
  const errorMessage = `Error al copiar el archivo ${carpeta}: ${err}\n`;
  try {
    await fs.appendFile(logFileError, errorMessage);
  } catch (logFileError) {
    console.error("Error al escribir en el archivo de log:", logFileError);
  }
}

async function logSuccess(carpeta) {
  const Message = `Archivo ${carpeta} copiado correctamente.\n`;
  try {
    await fs.appendFile(logFileSuccess, Message);
  } catch (logFileSuccess) {
    console.error("Error al escribir en el archivo de log:", logFileSuccess);
  }
}

module.exports = { logError, logSuccess };
