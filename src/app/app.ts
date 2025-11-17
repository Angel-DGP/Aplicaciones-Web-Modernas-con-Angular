import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiPerfil } from './mi-perfil/mi-perfil';
import { Prestamos } from './prestamos/prestamos';

@Component({
  selector: 'app-root',
  imports: [Prestamos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi nuevo proyecto de practica');
}
