import { Component } from '@angular/core';
import { Transacciones } from '../transacciones/transacciones';

@Component({
  selector: 'app-prestamos',
  imports: [Transacciones],
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
  prestamo={
    id: 1, tipo: 'v', interes: 5.5
  }
  redirigir = false;
  cambioRedireccion(){
    this.redirigir = !this.redirigir;
  }
}
