export class Libro {
    public id_libro: Number ;
    public id_usuario: Number ;
    public titulo: String;
    public tipo: String;
    public autor: String;
    public precio: Number;
    public foto: String;

        constructor( titulo: String, tipo: String, autor: String, precio: Number, foto: String, id_usuario: Number= 0,id_libro: Number= 0)
        {
            this.id_libro = id_libro;
            this.id_usuario = id_usuario;
            this.titulo = titulo;
            this.tipo = tipo;
            this.autor = autor;
            this.precio = precio;
            this.foto = foto;
        }
        
        
}
