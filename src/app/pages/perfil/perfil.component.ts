import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public newUser : Usuario;

  constructor(public usuarioService: UsuariosService){
    this.newUser = usuarioService.usuario
  }

  enviar(newName: String, newLastName: String, newMail: String, newUrl: String){
    console.log(this.newUser.nombre);
    this.newUser.nombre = newName;
    this.newUser.apellidos = newLastName;
    this.newUser.correo = newMail;
    this.newUser.foto = newUrl;

    console.log(this.newUser.foto);
    console.log();
    
    
    
  }
}
