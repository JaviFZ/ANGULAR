import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public usuariosServices: UsuariosService) {
    if (this.usuariosServices.logueado == true) {
    }
  }

}
