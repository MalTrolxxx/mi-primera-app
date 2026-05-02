import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  nombre :string = '';
  email :string = '';
  mensaje :string = '';
  enviado = false;

  enviarFormulario(){
    if(this.nombre && this.email && this.mensaje){
      console.log('Formulario Enviado :' ,{
        nombre : this.nombre,
        email :  this.email,
        mensaje : this.mensaje,
      })
      this.enviado = true;
    } else {
      alert('Por favor completa todos los campos');
    }
  }

  limpiarFormulario(){
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
    this.enviado = false;
  }
}
