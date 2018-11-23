let saludar = nombre => console.log('hola '+nombre);
let despedir = () => console.log('despedir');


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

