import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService 
{
  private url = "http://localhost:3000/";
  public logueado : boolean = false;
  public usuario : Usuario;
  constructor( private http: HttpClient) { }

  public register(usuario: Usuario)
  {
    return this.http.post(this.url + "registro" , usuario)
  }

  public login(usuario: Usuario)
  {
    return this.http.post(this.url + "login" , usuario)
  }
}
