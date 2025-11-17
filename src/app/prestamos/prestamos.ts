import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  imports: [],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web = "clearminds.learnworlds.com"
  redirigir = false;
  cambioRedireccion(){
    this.redirigir = !this.redirigir;
  }
}
