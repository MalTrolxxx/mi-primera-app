import { Component } from '@angular/core';
import {UsuarioService} from "../../services/usuario";


@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios  {
  usuarios :  any[] = [];
  cargando  =  false;

  //creaomos un constructor para inyectar el servicio de usuarios
  constructor(private usuarioService : UsuarioService) {

  }
  ngOnInit(){
    console.log('ngOnInit ejecutado');
    this.usuarioService.getUsuarios().subscribe({
      next :  (data) => {
        console.log('Datos recibidos:', data)
        this.usuarios = data;
        this.cargando =  false;

      },
      error : (err) => {
        console.error('Error:', err);
        this.cargando = false;
      }
    })

  }
}
