import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public libros: Libro[];

  constructor(){
    this.libros = [
      new Libro("El señor de los anillos", "tapa blanda", "Tolkien", 20, "../../../assets/img/esdla.jpg", ),
      new Libro("Celda 211", "tapa dura", "Antonio Salas", 15, "../../../assets/img/celda_211.webp" ),
      new Libro("Trainpotting", "tapa dura", "Irvine Welsh", 10, "../../../assets/img/train.jpg" ),
   
  

     
    ]
  }

  enviar(newTitle: String, newAutor: String, newBookType: String, newPrice: Number, newPort: String, newId_libro: Number, newId_user: Number){
    let introducirLibro : Libro = new Libro(newTitle, newAutor, newBookType, newPrice, newPort, newId_libro,newId_user )
    this.libros.push(introducirLibro)
  }

}
