import { Component } from "@angular/core";

@Component({
  selector: 'mi-perfil',
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.css'
})
export class MiPerfil {
    public nombre: string;
    public edad: number;
    public ocupacion: string;
    public direccion: string;
    public telefono: string;
    constructor(){
        this.nombre = "Juan Perez";
        this.edad = 30;
        this.ocupacion = "Desarrollador de Software";
        this.direccion = "Av.Amazonas y Rio Coca, Quito, Ecuador";
        this.telefono = "+593 999 999 999";
        alert("Bienvenido al perfil, estas dentro de la aplicacion!");
        console.log("Se cargo el componente MiPerfil correctamente.");
    }
}