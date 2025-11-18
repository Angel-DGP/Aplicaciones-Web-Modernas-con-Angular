import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  imports: [],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web = "clearminds.learnworlds.com"
  prestamosList = [
    {id: 1, nombre: "Juan Perez", monto: 5000, estado: "Aprobado"},
    {id: 2, nombre: "Maria Gomez", monto: 3000, estado: "Pendiente"},
    {id: 3, nombre: "Carlos Sanchez", monto: 7000, estado: "Pendiente"},
    {id: 4, nombre: "Ana Martinez", monto: 4500, estado: "Aprobado"},
    {id: 5, nombre: "Luis Rodriguez", monto: 6000, estado: "Pendiente"},
    {id: 6, nombre: "Sofia Lopez", monto: 8000, estado: "Aprobado"},
  ]
  redirigir = false;
  cambioRedireccion(){
    this.redirigir = !this.redirigir;
  }
}
