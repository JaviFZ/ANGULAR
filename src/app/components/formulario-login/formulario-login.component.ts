import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {

  constructor(private usuariosServices: UsuariosService, private router: Router) {

  }
  iniciarSesion(email: string, password: string) {
    const usuario = new Usuario(-1, "", "", email, "", password);
    this.usuariosServices.login(usuario).subscribe((respuesta: any) => {
      console.log(respuesta);
      if (respuesta.error) {
        console.log('los datos no coinciden')
      } else {
        this.usuariosServices.usuario = new Usuario(respuesta.id_usuario, respuesta.nombre, respuesta.apellidos, respuesta.correo, respuesta.url, "");
        this.usuariosServices.logueado = true;
        this.router.navigate(['libros'])
      }
    });
  }
}

