let saludar = nombre => console.log(nombre);
let despedir = nombre => console.log(nombre);
let renunciar = () => console.log('error');

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
