import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

const routes: Routes = [    
  {path: '',
component: ClientesComponent},
{path: 'registro-clientes', component: RegistroClienteComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
