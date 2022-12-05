function Decorador(target:Function){
      target.prototype.saludar = function(){
            console.log("Hola mundo");
      }
}


console.log("Saludos desde app.ts");

//voy a poner ahora el decorador y oara eso hay que poner en el tsconfig.json experimentalDecorators": true 

@Decorador
class Persona {
    constructor() {

     }
}

let persona = new Persona();
persona.saludar();
