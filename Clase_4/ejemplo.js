var fs= require ('fs');
var archivo = fs.readFileSync('./alumnos.txt','utf8');

console.log(archivo);
