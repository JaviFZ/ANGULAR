
import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public libros: Libro[] = [];

  constructor(public libroService: LibrosService){}

  public mostrarLibros(id_libro: string = ""){
    if(id_libro == ""){
      this.libros= this.libroService.getAll()
    }
    else {
      this.libros= [this.libroService.getOne(Number(id_libro))]
    }
  }

  public eliminarLibro(id_libro: Number){
    this.libroService.delete(id_libro)
  }
  
  

  // enviar(newTitle: String, newAutor: String, newBookType: String, newPrice: Number, newPort: String, newId_libro: Number, newId_user: Number){
  //   let introducirLibro : Libro = new Libro(newTitle, newAutor, newBookType, newPrice, newPort, newId_libro,newId_user )
  //   this.libros.push(introducirLibro)
  // }

}
