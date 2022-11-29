import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public newUser : Usuario;

  constructor(){
    this.newUser = new Usuario(1, "Javier", "Fernandez Zapata", "jferzap@gmail.com", "../../../assets/img/person.jpg", "jajajaja" )
  }

  enviar(newName: String, newLastName: String, newMail: String, newUrl: String){
    console.log(this.newUser.nombre);
    this.newUser.nombre = newName;
    this.newUser.apellidos = newLastName;
    this.newUser.correo = newMail;
    this.newUser.url = newUrl;
    
  }
}
