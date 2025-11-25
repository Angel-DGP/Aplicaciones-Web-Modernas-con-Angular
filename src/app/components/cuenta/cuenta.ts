import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  public cliente: Cliente;
  constructor(){
    this.cliente = new Cliente(1,'Didier','Guania','guanadid@gmail.com',1000);
  }
 ngOnInit() {
    console.log('El componente de cuenta esta arrancando!');
    
  }
  ngOnDestroy() {
    console.log('El componente de cuenta Ha sido destruido!');
  }

}
