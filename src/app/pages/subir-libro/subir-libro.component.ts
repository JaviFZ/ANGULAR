import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-subir-libro',
  templateUrl: './subir-libro.component.html',
  styleUrls: ['./subir-libro.component.css']
})
export class SubirLibroComponent {
  public libros: Libro[];

  constructor(public libroService: LibrosService){
    
  }

  enviar(newTitle: String, newBookType: String,newAutor: String,  newPrice: Number, newPort: String, newId_libro: Number, newId_user: Number){
    let introducirLibro : Libro = new Libro(newTitle, newBookType,newAutor,  newPrice, newPort, newId_libro,newId_user )
    this.libroService.add(introducirLibro).subscribe((respuesta: any) => {})
  }
}
