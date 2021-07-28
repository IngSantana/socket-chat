

//creando clase usuario

class Usuarios {

    constructor() {
        //inicializamos arreglo vacio
        this.personas = [];
    }

    //metodo para crear persona y agregarla al arreglo    
    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }

    //buscar persona por id
    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;
    }

    //regresa toda las personas
    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    //borrar persona 
    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id)

        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}