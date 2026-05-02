import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('mi-primera-app');

  usuarios: any[] = [];
  cargando = 0;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.usuarioService.getUsuarios().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data)
        this.usuarios = data;
        this.cargando = 0;
      },
      error: (err) => {
        console.error('Error:', err);
        this.cargando = 0;
      }
    })
  }
}