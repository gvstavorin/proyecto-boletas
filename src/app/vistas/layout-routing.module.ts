import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
       
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesModule' },
      { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosModule' },
      { path: 'productos', loadChildren: './productos/productos.module#ProductosModule' },
      { path: 'mapas', loadChildren: './mapas/mapas.module#MapasModule' },
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
