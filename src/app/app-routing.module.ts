import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { LoginComponent } from './pages/login/login.component';
import { ModificarLibroComponent } from './pages/modificar-libro/modificar-libro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SubirLibroComponent } from './pages/subir-libro/subir-libro.component';




// AQUI METEMOS LAS RUTAS DE LAS PAGINAS QUE VAN A FORMAR PARTE DE LA APP, EL ULTIMO {} ES PARA DECLARAR HOME COMO PAGINA PPAL AL ABRIR
const routes: Routes = [ 
  {path: "home", component:HomeComponent}, 
  {path: "libros", component:LibrosComponent},
  {path: "registro", component:RegistroComponent},
  {path:"perfil", component:PerfilComponent}, 
  {path:"subirLibro", component:SubirLibroComponent},
  {path:"modificarLibro", component:ModificarLibroComponent},
  {path:"login", component:LoginComponent},
  {path:"", pathMatch:"full" , redirectTo:"home"}  
];
////////////////////////////////////////////////////////
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
