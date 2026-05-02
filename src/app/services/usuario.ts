import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';//muy importante por que nos permite manejar las respuestas de las peticiones http de manera asincrona

interface Usuario {
  id : number
  name :  string 
  email : string
  phone : string
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

 constructor(private http: HttpClient){}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
}