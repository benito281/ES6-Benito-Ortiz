let saludo = (persona) => 
{ return '¿hola como estas '+persona+'?'};

console.log(saludo('Willy'));

const alumno = (nombre,apellido,carrera,edad) =>{
    let datos={nombre:nombre,apellido:apellido,carrera:carrera,edad:edad}
    return datos;
}
console.log(alumno('pepe','perez','mecatronica',25));

