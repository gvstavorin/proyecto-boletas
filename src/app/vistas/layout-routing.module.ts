import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared/auth/auth.guard';
const routes: Routes = [
       
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesModule' },

      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
