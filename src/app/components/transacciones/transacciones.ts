import { Component, Output, EventEmitter } from '@angular/core';
import { Transaccion } from '../../models/transaccion';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-transacciones',
  imports: [NgClass, FormsModule],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',
})
export class Transacciones {
  public transaccionesList: Array<Transaccion>;
  public descripcion_Transaccion: string = '';
   @Output() mensajeEnviado = new EventEmitter();
  constructor() {
    this.transaccionesList = [
      new Transaccion(1, new Date('2024-01-05'), 'Pago de servicio de internet', 25.50, 'egreso'),
      new Transaccion(2, new Date('2024-01-10'), 'Depósito por venta de producto', 80.00, 'ingreso'),
      new Transaccion(3, new Date('2024-01-15'), 'Compra de supermercado', 45.30, 'egreso'),
      new Transaccion(4, new Date('2024-02-01'), 'Salario mensual', 450.00, 'ingreso'),
      new Transaccion(5, new Date('2024-02-05'), 'Pago de luz eléctrica', 18.75, 'egreso'),
      new Transaccion(6, new Date('2024-02-09'), 'Venta de artículo usado', 35.00, 'ingreso')
    ]
  }
  mostrarTransaccion(){
    alert(this.descripcion_Transaccion)
  }
  enviarSaludo(){
    this.mensajeEnviado.emit("Hola desde Transacciones")
  }
}
