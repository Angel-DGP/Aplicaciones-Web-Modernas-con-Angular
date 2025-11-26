import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiPerfil } from './components/mi-perfil/mi-perfil';
import { Prestamos } from './components/prestamos/prestamos';

@Component({
  selector: 'app-root',
  imports: [Prestamos, MiPerfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi nuevo proyecto de practica');
}
