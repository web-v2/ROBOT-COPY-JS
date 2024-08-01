/*
import fs from "fs";
const pathDirectoriosProceso = 'C:\\Users\\Admin\\Desktop\\robot-radicacion\\radicados';
function getDirectories(path) {
  return fs.readdirSync(path).filter(file => {
    return fs.lstatSync(path + '/' + file).isDirectory();
  }).map(file => file);
}
export const documentos = getDirectories(pathDirectoriosProceso);
*/
const carpetas = [
  "FEPV73488",
  "FEPV73490",
  "FEPV73491",
  "FEPV73492",
  "FEPV74036",
];

module.exports = { carpetas };
