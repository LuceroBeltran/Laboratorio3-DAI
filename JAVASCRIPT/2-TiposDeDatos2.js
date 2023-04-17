//Tipo de dato boolean (true, false)
var bandera = false;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato symbol 
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo de clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(typeof x);

x= undefined;
console.log(typeof x);

//null = asusencia de valor
var y =null;
console.log(typeof y);