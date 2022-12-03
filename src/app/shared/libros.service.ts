import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { Libro } from 'src/app/models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private libros: Libro[];

  constructor() {
    this.libros = [
      new Libro("El señor de los anillos", "tapa blanda", "Tolkien", 20, "../../../assets/img/esdla.jpg", 1 , 11),
      new Libro("Celda 211", "tapa dura", "Antonio Salas", 15, "../../../assets/img/celda_211.webp", 2 , 22 ),
      new Libro("Trainpotting", "tapa dura", "Irvine Welsh", 10, "../../../assets/img/train.jpg", 3 , 33 ),
    ]
   }

  public getAll() :Libro[]
  {
    return this.libros;
  }

  public getOne(id_libro: Number):Libro
  {
    let libro = this.libros.find(libro=>libro.id_libro == id_libro)
      
    return libro;
    
  }


  public add(libro: Libro):void
  {
    this.libros.push(libro);
  }

  public edit(libro: Libro):boolean
  {
    let posicion = this.libros.findIndex(libro => libro.id_libro == libro.id_libro)
    if(posicion == -1){
      return false;
    } else{
      this.libros[posicion] == libro
      return true;
    }
  }
  

  public delete(id_libro: Number):boolean
  {
    let posicion = this.libros.findIndex(libro=> libro.id_libro == id_libro)
    if(posicion == -1){
      return false;
    } else{
      this.libros.splice(posicion, 1)
      return true;
    }
  }

}
