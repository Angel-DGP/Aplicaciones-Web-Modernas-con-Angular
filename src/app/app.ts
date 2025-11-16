import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiPerfil } from './mi-perfil/mi-perfil';

@Component({
  selector: 'app-root',
  imports: [MiPerfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi nuevo proyecto de practica');
}
