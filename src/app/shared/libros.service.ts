import { Injectable } from '@angular/core';
import { find, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Libro } from 'src/app/models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private url = "http://localhost:3000/";
  private libros: Libro[];

  constructor(private http: HttpClient) {
    this.libros = [
      new Libro("El señor de los anillos", "tapa blanda", "Tolkien", 20, "../../../assets/img/esdla.jpg", 1 , 11),
      new Libro("Celda 211", "tapa dura", "Antonio Salas", 15, "../../../assets/img/celda_211.webp", 2 , 22 ),
      new Libro("Trainpotting", "tapa dura", "Irvine Welsh", 10, "../../../assets/img/train.jpg", 3 , 33 ),
    ]
   }

  // public getAll() :Libro[]
  // {
  //   return this.libros;
  // }


  // public getOne(id_libro: Number):Libro
  // {
  //   let libro = this.libros.find(libro=>libro.id_libro == id_libro)
      
  //   return libro;
    
  // }


  // public add(libro: Libro):void
  // {
  //   this.libros.push(libro);
  // }

  

  // public edit(libro: Libro):boolean
  // {
  //   let posicion = this.libros.findIndex(libro => libro.id_libro == libro.id_libro)
  //   if(posicion == -1){
  //     return false;
  //   } else{
  //     this.libros[posicion] == libro
  //     return true;
  //   }
  // }


  
  public getAll(id_usuario: Number) : Observable<Object> 
  {
    return this.http.get(this.url + "libro?id_usuario=" + id_usuario )
  }

  public getOne(id_usuario: Number, id_libro: Number):Observable<Object>
  {
    return this.http.get(this.url + "libro?id_usuario=" + id_usuario + "&id_libro="+ id_libro )
  }


  public add(libro: Libro): Observable<Object>
  {
    return this.http.post(this.url + "libro?id_usuario=" + libro.id_usuario , libro)
  }

  public edit(libro: Libro): Observable<Object>
  {
    return this.http.put(this.url + "libro?id_usuario=" + libro.id_usuario + "&id_libro=" + libro.id_libro, libro)
  }

  // public delete(id_libro: Number):boolean
  // {
  //   let posicion = this.libros.findIndex(libro=> libro.id_libro == id_libro)
  //   if(posicion == -1){
  //     return false;
  //   } else{
  //     this.libros.splice(posicion, 1)
  //     return true;
  //   }
  // }

  public delete(id_libro: Number):Observable<Object>
  {
    return this.http.delete(this.url + "libro" , {body:{id_libro}})
  }

}
