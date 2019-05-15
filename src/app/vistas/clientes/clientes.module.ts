import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import {PageHeaderModule} from './../Componentes/page-header/page-header.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import {DatatableComponent} from './datatable/datatable.component';
import {MaterialModule} from './../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2Rut } from 'ng2-rut';
@NgModule({
  declarations: [
    ClientesComponent,
    RegistroClienteComponent,
    DatatableComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    DataTablesModule,
    MaterialModule,FormsModule, ReactiveFormsModule ,Ng2Rut,
    PageHeaderModule
  ]
})
export class ClientesModule { }
