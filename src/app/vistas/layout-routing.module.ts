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
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
