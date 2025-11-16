import { Component } from "@angular/core";

@Component({
  selector: 'mi-perfil',
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.css'
})
export class MiPerfil {
    constructor(){
        alert("Bienvenido al perfil, estas dentro de la aplicacion!");
        console.log("Se cargo el componente MiPerfil correctamente.");
    }
}