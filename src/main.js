let saludar = nombre => console.log(nombre);
let despedir = nombre => console.log(nombre);
let renunciar = () => console.log('error');
let pedir = () => console.log('pedir');


class Persona
{
    constructor(nombre){
        this.nombre = nombre;
    }
    caminar()
    {
        console.log('Estoy caminando');
    }
}

