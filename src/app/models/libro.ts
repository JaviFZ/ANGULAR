export class Libro {
    public id_libro: Number ;
    public id_usuario: Number ;
    public titulo: String;
    public tipoLibro: String;
    public autor: String;
    public precio: Number;
    public photo: String;

        constructor( titulo: String, tipoLibro: String, autor: String, precio: Number, photo: String, id_libro: Number= 0, id_usuario: Number= 0)
        {
            this.id_libro = id_libro;
            this.id_usuario = id_usuario;
            this.titulo = titulo;
            this.tipoLibro = tipoLibro;
            this.autor = autor;
            this.precio = precio;
            this.photo = photo;
        }
        
        
}
