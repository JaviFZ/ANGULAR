export class Usuario {
    public id_usuario: Number;
    public nombre: String;
    public apellidos: String;
    public correo: String;
    public foto: String;
    public password: String;

        constructor (id_usuario: Number,nombre: String, apellidos: String, correo: String, foto: String,  password: String){
            this.id_usuario= id_usuario;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.correo = correo;
            this.foto = foto;
            this.password = password;
        }

        public nombreCompleto():String{
            return this.nombre + " " + this.apellidos;
        }

}
