import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mi-primera-app');
  nombre = 'Jesus Rosales';
  contador = 0;

  usuarios: any[] = [];
  usuariosActivos: any[] = [];

  // Inyección de dependencias
  constructor(private usuarioService: UsuarioService) {
    this.usuarios = this.usuarioService.getUsuarios();
    this.usuariosActivos = this.usuarioService.getUsuarioActivo();
  }

  incrementar() { this.contador++ }
  decrementar() { this.contador-- }
  resetear() { this.contador = 0 }
}