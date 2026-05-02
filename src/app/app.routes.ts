import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Usuarios } from './pages/usuarios/usuarios';
import { Contacto } from './pages/contacto/contacto';


export const routes: Routes = [
    {path : '' ,component : Home},
    {path : 'usuarios' ,component : Usuarios},
    {path : 'contacto' , component: Contacto}
];
