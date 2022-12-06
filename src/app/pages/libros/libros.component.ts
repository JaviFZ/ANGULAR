
import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public libros: Libro[] = [];

  constructor(public libroService: LibrosService, public usuarioService: UsuariosService){}

  public mostrarLibros(id_libro: string = ""){
    if(id_libro == ""){
      this.libroService.getAll(this.usuarioService.usuario.id_usuario).subscribe((respuesta: any) => {
        this.libros = respuesta
      })
    }
    else {
      this.libroService.getOne(this.usuarioService.usuario.id_usuario, Number(id_libro)).subscribe((respuesta: any) => {
        this.libros = respuesta
      })
    }
  }

  public eliminarLibro(id_libro: Number){
    this.libroService.delete(id_libro).subscribe((respuesta: any) => {
      this.libros = respuesta
  })
}
  

  // enviar(newTitle: String, newAutor: String, newBookType: String, newPrice: Number, newPort: String, newId_libro: Number, newId_user: Number){
  //   let introducirLibro : Libro = new Libro(newTitle, newAutor, newBookType, newPrice, newPort, newId_libro,newId_user )
  //   this.libros.push(introducirLibro)
  // }

}
