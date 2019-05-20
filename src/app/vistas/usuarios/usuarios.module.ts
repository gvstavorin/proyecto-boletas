import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatatableComponent} from '../usuarios/datatable/datatable.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { PageHeaderModule } from '../Componentes/page-header/page-header.module';
import {RegistroUsuariosComponent} from '../usuarios/registro-usuarios/registro-usuarios.component';

@NgModule({
  declarations: [UsuariosComponent,DatatableComponent,RegistroUsuariosComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    PageHeaderModule
  ]
})
export class UsuariosModule { }
