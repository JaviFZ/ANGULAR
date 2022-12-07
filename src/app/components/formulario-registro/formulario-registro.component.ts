import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {

  constructor(public UsuariosService: UsuariosService, private router: Router) { }

  public registrarse(nombre: String, apellidos: String, correo: String, foto: String, password: String, password2: String) {
    if (password === password2) {
      let nuevoUsuario = new Usuario(-1, nombre, apellidos, correo, foto, password)
      this.UsuariosService.register(nuevoUsuario).subscribe((respuesta) => {this.router.navigateByUrl("login")
        console.log(respuesta);
      })
    } else {
      alert('Contraseñas no coinciden')
    }


  }
}
