let saludar = nombre => console.log(nombre);
let despedir = nombre => console.log(nombre);


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

