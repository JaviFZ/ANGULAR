import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.css']
})



export class ModificarLibroComponent {
  public libros: Libro[];
  constructor(public libroService: LibrosService, private usuarioService: UsuariosService){
    
  }
  enviar(newTitle: String, newBookType: String,newAutor: String,  newPrice: string, newPort: String, newId_libro: string, newId_user: Number){
    let introducirLibro : Libro = new Libro(newTitle, newBookType,newAutor,  parseInt(newPrice), newPort,this.usuarioService.usuario.id_usuario ,parseInt(newId_libro))
    
    if(introducirLibro.titulo == ''){
      introducirLibro.titulo = null;
    }
    if(introducirLibro.tipo == ''){
      introducirLibro.tipo = null;
    }
    if(introducirLibro.autor == ''){
      introducirLibro.autor = null;
    }
    if(introducirLibro.foto == ''){
      introducirLibro.foto = null;
    }

    this.libroService.edit(introducirLibro).subscribe((data) => {console.log(data)})
    
  }
}

  

  

  
  
  
