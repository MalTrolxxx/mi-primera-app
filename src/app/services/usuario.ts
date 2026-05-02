import { Injectable } from '@angular/core';

interface Usuario {
  id: number
  nombre: string
  activo: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: Usuario[] = [
    { id: 1, nombre: 'Jesus Rosales', activo: true },
    { id: 2, nombre: 'Maria Gomez', activo: false },
    { id: 3, nombre: 'Carlos Lopez', activo: true }
  ]

  getUsuarios(): Usuario[] {
    return this.usuarios
  }

  getUsuarioActivo(): Usuario[] {
    return this.usuarios.filter(u => u.activo)
  }
}