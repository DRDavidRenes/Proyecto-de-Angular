"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Decorador(target) {
    target.prototype.saludar = function () {
        console.log("Hola mundo");
    };
}
console.log("Saludos desde app.ts");
//voy a poner ahora el decorador y oara eso hay que poner en el tsconfig.json experimentalDecorators": true 
let Persona = class Persona {
    constructor() {
    }
};
Persona = __decorate([
    Decorador
], Persona);
let persona = new Persona();
persona.saludar();
console.log("Saludos desde app2.ts");
console.log("Saludos desde app3.ts");
